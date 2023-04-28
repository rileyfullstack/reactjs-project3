import { Box } from '@mui/system'
import React from 'react'
import { node } from 'prop-types'

export default function Main({ children }) {
  return (
    <>
      <Box sx=
      {{
        minHeight: "90vh",
        backgroundColor: "#e3f2fd",
    }}>
    {children}
      </Box>
    </>
  )
}

Main.propType = {
  children:node
}