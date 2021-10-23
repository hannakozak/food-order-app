import React from 'react';

import MenuList from './components/Menu/MenuList/MenuList';
import Header from './components/Layout/Header';

import { ThemeProvider } from "styled-components";
import { theme } from './styles/Theme';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <MenuList />
    </ThemeProvider>
  )
}

export default App;