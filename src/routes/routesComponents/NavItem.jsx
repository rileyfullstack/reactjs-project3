import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { object, PropTypes, string } from 'prop-types'
import NavBarLink from './NavBarLink'

export default function NavItem({to, label, sx}) {
  return (
    <NavBarLink to={to} sx={sx}>
        <Button color='inherit' >
            {label}
        </Button>
    </NavBarLink>
  )
}

NavItem.propTypes = {
    to: string.isRequired,
    label: string.isRequired,
    sx: object,
}