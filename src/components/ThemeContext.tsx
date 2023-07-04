import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import useLocalStorage from '../hooks/useLocalStorage';

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useLocalStorage('theme', 'light');

  const lightTheme = useMemo(() => createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: blue[700],
      },
    },
  }), []);

  const darkTheme = useMemo(() => createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: orange[700],
      },
    },
  }), []);

  const currentTheme = mode === 'light' ? lightTheme : darkTheme;

  const colorMode = useMemo(() => ({
    theme: mode,
    toggleTheme: () => {
      setMode((currentMode: 'light' | 'dark') => (
        currentMode === 'light' ? 'dark' : 'light'
      ));
    },
  }), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
