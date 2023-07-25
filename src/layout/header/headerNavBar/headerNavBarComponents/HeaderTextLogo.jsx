import { Typography } from '@mui/material'
import React from 'react'

export default function HeaderTextLogo() {
  return (
    <>
      <Typography sx={{
        display:{xs:"none", md:"inline-flex"}, 
        marginRight:2, 
        fontFamily:'fantasy',
        }} variant="h5"
      >
        CardNet
      </Typography>
    </>
  )
}
