import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageComponent from './ImageComponent'

export default function CardDetailsHead({ card }) {
  return (
    <Box>
      <Box>
        <Typography variant="h3" sx={{pt: 4, mb: 3, textAlign: "center"}}>Welcome to {card.title}!</Typography>
        <Typography variant="h4" sx={{mb: 2, textAlign: "center"}}>{card.subtitle}</Typography>
      </Box>
      <Box sx={{mb: 5, display: "flex", justifyContent: "center"}}>
        <ImageComponent
          sx={{height: "60%", width: "70%"}}
          url={card?.image?.url}
          alt="Business card image"
        />
      </Box>
    </Box>
  )
}
