import React from 'react';
import Basket from './Basket';

import { HeaderWrapper } from './Header.styles';
import { HeaderPrimary } from '../../styles/CommonStyles';

const Header = (props) => {
    return (
          <HeaderWrapper>
            <HeaderPrimary>Our Menu</HeaderPrimary>
            <Basket onOpenBasket={props.onOpenBasket} />
          </HeaderWrapper>
    )
}

export default Header;