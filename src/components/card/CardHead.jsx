import { CardMedia } from '@mui/material'
import React from 'react'
import { PropTypes } from 'prop-types'
import imgType from '../../cards/models/imgType'

export default function CardHead({image}) {
  return (
    <>
      <CardMedia
          component="img"
          height="140"
          image={image.url}
          alt={image.alt}/>
    </>
  )
}

CardHead.propTypes = {
  image: imgType
}