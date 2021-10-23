import React from 'react';

import { ItemWrapper, ItemName, ItemPrice } from './MenuItem.styles';

const MenuItem = (props) => {
    return (
        <ItemWrapper>
            <ItemName>{props.name}</ItemName>
            <ItemPrice>{props.price}</ItemPrice>
        </ItemWrapper>
    )
}

export default MenuItem;