import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, orange } from '@mui/material/colors';
import { FC, ReactNode, createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type Props = {
  children: ReactNode;
};

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeContextProvider: FC<Props> = ({ children }) => {
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
  }), [mode, setMode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
