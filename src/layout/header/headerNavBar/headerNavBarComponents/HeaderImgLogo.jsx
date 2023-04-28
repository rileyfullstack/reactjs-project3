import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import NavBarLink from '../../../../routes/routesComponents/NavBarLink'
import ROUTES from '../../../../routes/routesModel'
export default function HeaderImgLogo() {
  return (
      <IconButton sx={{mb:'15px'}}>
          <Avatar
              src="/assets/images/business-card.png"
              alt="Business Icon"
          />
      </IconButton>
  )
}
