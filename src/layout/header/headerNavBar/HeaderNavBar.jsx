import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import HeaderNavLeft from './headerNavBarComponents/HeaderNavLeft'
import RightNavigation from '../rightNavBar/RightNavigation';
import { useTheme } from '../../../providers/ThemeProviders';


export default function HeaderNavBar() {

  const { themeMode } = useTheme();

  return (
    <AppBar 
    position='sticky'
    elevation={10}
    sx={{backgroundColor: themeMode ? '#36454F' : '#173eff'}}
    > 
      <Toolbar sx={{justifyContent: "space-between"}}>
        <HeaderNavLeft/>
        <RightNavigation/>
      </Toolbar>
    </AppBar>
  )
}
