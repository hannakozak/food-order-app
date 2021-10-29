import React from 'react';

import MenuForm from './MenuForm';

import { ItemWrapper , ItemPrice, ItemPhoto } from './MenuItem.styles';
import { HeaderSecondary } from '../../../styles/CommonStyles';

const MenuItem = (props) => {
    return (
        <ItemWrapper>
            <HeaderSecondary>{props.name}</HeaderSecondary>
            <ItemPhoto src={props.image} alt={props.name} />
            <ItemPrice>{props.price}</ItemPrice>
            <MenuForm />
        </ItemWrapper>
    )
}

export default MenuItem;