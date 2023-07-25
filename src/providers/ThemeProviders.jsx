import React, { createContext, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext(null);

export default function ThemeProviders({ children }) {
  const [themeMode, setThemeMode] = React.useState(true);

  const themeModeSwitcher = () => {
    setThemeMode((prev) => !prev);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#232b54',
      },
      secondary: {
        main: '#FF4081',
      },
      // Add other light mode colors here
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2a2d3d',
      },
      secondary: {
        main: '#FF4081',
      },
      // Add other dark mode colors here
    },
  });

  const theme = themeMode ? darkTheme : lightTheme;

  const value = useMemo(() => {
    return {
      themeMode,
      themeModeSwitcher,
    };
  }, [themeMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProviders");
  return context;
};
