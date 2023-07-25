import { Box, Typography } from '@mui/material'
import React from 'react'

export default function CardDetailsContent({ card }) {
  return (
    <Box sx={{ml: 5}}>
    <Box sx={{mb: 3}}>
      <Typography variant='h5'>
        {card.description}
      </Typography>
    </Box>
    <Box sx={{mb: 2}}>
      <Typography variant='h5' sx={{fontWeight: "bold"}}>
        How to contact us:
      </Typography>
      <Typography variant='h5'>
        Phone number: {card.phone}
      </Typography>
      <Typography variant='h5'>
        Email address: {card.email}
      </Typography>
      <Typography variant='h5'>
        Our website: {card.web}
      </Typography>
    </Box>
    <Box sx={{pb: 5}}>
      <Typography variant='h5' sx={{fontWeight: "bold"}}>
        How to get to us:
      </Typography>
      <Typography variant='h5'>
        {card.address.street} {card.address.houseNumber}, {card.address.city}, {card.address.state}, {card.address.country}
      </Typography>
    </Box>
  </Box>
  )
}
