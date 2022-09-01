import React, { useContext, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Routes from './routes';
import { ThemeContext } from './contexts/themeContext';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return  (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;