import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia } from '@mui/material';

function ImageComponent({sx, url, alt}) {
  return (
    <>
        <CardMedia 
          component="img" 
          sx={sx} 
          image={url} 
          alt={alt}
        />
    </>
  )
}

ImageComponent.propTypes = {
    sx: PropTypes.object,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ImageComponent;