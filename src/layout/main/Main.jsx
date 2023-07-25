import { Box } from '@mui/system'
import React from 'react'
import { node } from 'prop-types'
import { useTheme } from '../../providers/ThemeProviders';

export default function Main({ children }) {

  const { themeMode } = useTheme();

  return (
    <>
      <Box sx=
      {{
        minHeight: "90vh",
        backgroundColor: themeMode ? "#36454F" : "#e3f2fd",
    }}>
    {children}
      </Box>
    </>
  )
}

Main.propType = {
  children:node
}