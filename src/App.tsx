import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './hooks/ThemeContext';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
