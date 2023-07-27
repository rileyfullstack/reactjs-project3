import { Route, Routes } from 'react-router-dom'
import CardDetailsPage from '../cards/pages/CardDetailsPage'
import CardsPage from '../cards/pages/CardsPage'
import FavCardsPage from '../cards/pages/FavCardsPage'
import MyCards from '../cards/pages/MyCards'
import About from '../pages/about/About'
import ErrorPage from '../pages/Errors/ErrorPage404'
import EditUserPage from '../users/pages/EditUserPage'
import LoginPage from '../users/pages/LoginPage'
import SignUpPage from '../users/pages/SignupPage'
import ROUTES from './routesModel'
import EditCardPage from '../cards/pages/EditCardPage'
import CreateCardPage from '../cards/pages/CreateCardPage'

export default function AppRouter() {
  return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage/>}/>
            <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
            <Route path={`${ROUTES.CARDS}/:search`} element={<CardsPage/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
            <Route path={ROUTES.ERROR404} element={<ErrorPage/>}/>
            <Route path={ROUTES.EDIT_USER} element={<EditUserPage/>}/>
            <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
            <Route path={ROUTES.SIGNUP} element={<SignUpPage/>}/>
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage/>}/>
            <Route path={ROUTES.MY_CARDS} element={<MyCards/>}/>
            <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage/>}/>
            <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage/>}/>
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage/>}/>
        </Routes>
  )
}