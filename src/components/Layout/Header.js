import React from "react";
import Basket from "./Basket";

import { HeaderWrapper } from "./Header.styles";
import { HeaderSecondary } from "../../styles/CommonStyles";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderSecondary>Our Menu</HeaderSecondary>
      <Basket onOpenBasket={props.onOpenBasket} />
    </HeaderWrapper>
  );
};

export default Header;
