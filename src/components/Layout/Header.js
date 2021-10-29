import React from 'react';
import Basket from './Basket';

import { HeaderWrapper } from './Header.styles';
import { HeaderPrimary } from '../../styles/CommonStyles';

const Header = () => {
    return (
          <HeaderWrapper>
            <HeaderPrimary>Our Menu</HeaderPrimary>
            <Basket />
          </HeaderWrapper>
    )
}

export default Header;