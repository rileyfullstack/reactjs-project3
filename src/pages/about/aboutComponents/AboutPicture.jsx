import { CardMedia } from '@mui/material'
import React from 'react'

export default function AboutPicture() {
  return (
    <>
        <CardMedia component="img" 
        image="./assets/images/aboutImage.jpeg" 
        alt="About Image" sx={{width:"30%", 
        height:"auto"}}
        />
    </>
  )
}
