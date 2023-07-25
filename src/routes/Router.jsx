import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardDetailsPage from '../cards/pages/CardDetailsPage'
import CardsPage from '../cards/pages/CardsPage'
import FavCardsPage from '../cards/pages/FavCardsPage'
import MyCards from '../cards/pages/MyCards'
import About from '../pages/about/About'
import ErrorPage from '../pages/Errors/ErrorPage404'
import Sandbox from '../sandbox/Sandbox'
import EditUserPage from '../users/pages/EditUserPage'
import LoginPage from '../users/pages/LoginPage'
import SignUpPage from '../users/pages/SignupPage'
import UserProfilePage from '../users/pages/UserProfilePage'
import FirstSandboxComponenet from '../sandbox/components/FirstSandboxComponenet'
import SecondSandboxComponent from '../sandbox/components/SecondSandboxComponent'
import ROUTES from './routesModel'
import LifeCycle from '../sandbox/components/LifeCycle'
import Country from '../sandbox/components/Country'
import CountryMapper from '../sandbox/components/CountryMapper'
import Memoization from '../sandbox/components/Memoization'
import MyCounter from '../sandbox/components/MyCounter'
import GrandComponent from '../sandbox/context/GrandComponent'
import MyForm from '../sandbox/components/MyForm'
import MyFormWithComponents from '../sandbox/components/MyFormWithComponents'
import { element } from 'prop-types'
import EditCardPage from '../cards/pages/EditCardPage'
import CreateCardPage from '../cards/pages/CreateCardPage'
import CardSearchPage from '../cards/pages/CardSearchPage'

export default function AppRouter() {
  return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage/>}/>
            <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
            <Route path={ROUTES.ERROR404} element={<ErrorPage/>}/>
            <Route path={ROUTES.EDIT_USER} element={<EditUserPage/>}/>
            <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
            <Route path={ROUTES.SIGNUP} element={<SignUpPage/>}/>
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage/>}/>
            <Route path={ROUTES.MY_CARDS} element={<MyCards/>}/>
            <Route path={`${ROUTES.SEARCH}/:id`} element={<CardSearchPage/>}/>
            <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage/>}/>
            <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage/>}/>
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage/>}/>
            <Route path={ROUTES.SANDBOX} element={<Sandbox/>}>
              <Route path='first' element={<FirstSandboxComponenet/>}/>
              <Route path='second' element={<SecondSandboxComponent/>}/>
              <Route path='life-cycle' element={<LifeCycle/>}/>
              <Route path='country-api' element={<Country/>}/>
              <Route path='country-api-mapper' element={<CountryMapper/>}/>
              <Route path='memo' element={<Memoization/>}/>
              <Route path='my-counter' element={<MyCounter/>}/>
              <Route path='grand' element={<GrandComponent/>}/>
              <Route path='form' element={<MyFormWithComponents/>}/>
            </Route>
        </Routes>
  )
};