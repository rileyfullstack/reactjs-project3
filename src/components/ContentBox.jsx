import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '../providers/ThemeProviders';

export default function ContentBox({ children }) {

    const { themeMode } = useTheme();

  return (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="calc(100vh - 64px)" 
    paddingX={6} 
    paddingY={2} 
  >
    <Box maxWidth={900} width="100%">
      <Box
        display="flex"
        flexDirection="column" 
        justifyContent="left"
        alignItems="left"
        bgcolor={themeMode ? "#78878f" : "#F5F5F5"} 
        border={themeMode ? "1px solid #78878e" : "1px solid #F5F5F5"}
        borderRadius={8} 
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" 
        padding={2} 
      >
        {children}
      </Box>
      </Box>
  </Box>
  )
}
