import React from 'react';
import Basket from './Basket';

import { HeaderPrimary, HeaderWrapper } from './Header.styles';

const Header = () => {
    return (
          <HeaderWrapper>
            <HeaderPrimary>Our Menu</HeaderPrimary>
            <Basket />
          </HeaderWrapper>
    )
}

export default Header;