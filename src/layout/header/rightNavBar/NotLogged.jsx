import { Box } from '@mui/material'
import React from 'react'
import NavItem from '../../../routes/routesComponents/NavItem'
import ROUTES from '../../../routes/routesModel'

export default function NotLogged() {
  return (
    <Box>
      <NavItem to={ROUTES.LOGIN} label="Login" />
      <NavItem to={ROUTES.SIGNUP} label="Signup" />
    </Box>
  )
}
