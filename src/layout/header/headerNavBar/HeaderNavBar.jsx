import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import HeaderNavLeft from './headerNavBarComponents/HeaderNavLeft'

export default function HeaderNavBar() {
  return (
    <AppBar position='sticky' color='primary' elevation={10}>
        <Toolbar sx={{justifyContent:'space-between'}}>
            <HeaderNavLeft/>
        </Toolbar>
    </AppBar>
  )
}
