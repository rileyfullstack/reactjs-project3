import { Box } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBarLink from '../../../../routes/routesComponents/NavBarLink'
import ROUTES from '../../../../routes/routesModel'
import HeaderImgLogo from './HeaderImgLogo'
import HeaderTextLogo from './HeaderTextLogo'
import NavItem from '../../../../routes/routesComponents/NavItem'
import { useUser } from '../../../../users/providers/UserProvider'

export default function HeaderNavLeft() {

  const { user } = useUser();
  const sx = {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
    },
    mb: 0.4,
  }

  return (
    <Box sx={{mt:'15px'}}>
      <NavBarLink to={ROUTES.ROOT}>
        <HeaderImgLogo/>
      </NavBarLink>
      <HeaderTextLogo/>
      {user && <NavItem to={ROUTES.FAV_CARDS} label="My favorite Cards" sx={sx}/>}
      {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My Cards" sx={sx}/>}
    </Box>
  )
}
