import React, { createContext , useContext, useState } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<any>;
}

interface Theme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  },
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const localStorageTheme = localStorage.getItem('minha_carteira:theme');

    if(localStorageTheme) {
      return JSON.parse(localStorageTheme);
    } else {
      return light;
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
};