import { Box } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBarLink from '../../../../routes/routesComponents/NavBarLink'
import ROUTES from '../../../../routes/routesModel'
import HeaderImgLogo from './HeaderImgLogo'
import HeaderTextLogo from './HeaderTextLogo'

export default function HeaderNavLeft() {
  return (
    <Box sx={{mt:'15px'}}>
      <NavBarLink to={ROUTES.ROOT}>
        <HeaderImgLogo/>
      </NavBarLink>
      <HeaderTextLogo/>
    </Box>
  )
}
