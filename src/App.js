import React, { useState } from 'react';

import MenuList from './components/Menu/MenuList/MenuList';
import Header from './components/Layout/Header';
import OrderCard from './components/OrderCard/OrderCard';

import { ThemeProvider } from "styled-components";
import { theme } from './styles/Theme';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
  const [openBasket, setOpenBasket] = useState(false);

  const openBasketHandler = () => {
    setOpenBasket(true);
  }

  const closeBasketHandler = () => {
    setOpenBasket(false);
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {openBasket && <OrderCard onCloseBasket={closeBasketHandler}/>}
        <Header onOpenBasket={openBasketHandler}/>
        <MenuList />
    </ThemeProvider>
  )
}

export default App;