import React from 'react';

import MenuList from './components/Menu/MenuList/MenuList';
import Header from './components/Layout/Header';
import OrderCard from './components/OrderCard/OrderCard';

import { ThemeProvider } from "styled-components";
import { theme } from './styles/Theme';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <OrderCard />
        <Header />
        <MenuList />
    </ThemeProvider>
  )
}

export default App;