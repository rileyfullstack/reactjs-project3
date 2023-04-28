import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItem from '../routes/routesComponents/NavItem'

export default function Sandbox() {
  return (
    <div>
      <AppBar position='sticky' color='transparent'>
        <Toolbar sx={{justifyContent: "space-evenly"}}>
            <NavItem to={"first"} label="test 1" sx={{color: 'black'}}/> 
            <NavItem to={"second"} label="test 2" sx={{color: 'black'}}/> 
            <NavItem to={"life-cycle"} label="life cycle" sx={{color: 'black'}}/> 
            <NavItem to={"country-api"} label="country-api" sx={{color: 'black'}}/> 
            <NavItem to={"country-api-mapper"} label="country-api-mapper" sx={{color: 'black'}}/> 
            <NavItem to={"memo"} label="Memoization" sx={{color: 'black'}}/> 
            <NavItem to={"my-counter"} label="My counter" sx={{color: 'black'}}/> 
        </Toolbar>
      </AppBar>
      <Outlet/>
    </div>
  )
}
