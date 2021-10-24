import React from 'react';
import MenuForm from './MenuForm';

import { ItemWrapper, ItemName, ItemPrice, ItemPhoto } from './MenuItem.styles';

const MenuItem = (props) => {
    return (
        <ItemWrapper>
            <ItemName>{props.name}</ItemName>
            <ItemPhoto src={props.image} alt={props.name} />
            <ItemPrice>{props.price}</ItemPrice>
            <MenuForm />
        </ItemWrapper>
    )
}

export default MenuItem;