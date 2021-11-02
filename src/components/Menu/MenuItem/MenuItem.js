import React, { useContext } from 'react';

import MenuForm from './MenuForm';

import BasketContext from '../../../context/basket-context';

import { ItemWrapper , ItemPrice, ItemPhoto } from './MenuItem.styles';
import { HeaderSecondary } from '../../../styles/CommonStyles';

const MenuItem = (props) => {
    const basketCtx =  useContext(BasketContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToBasketHandler = (amount) => {
         basketCtx.addItem({
             id: props.id,
             name: props.name,
             amount: amount,
             price: props.price
         })
    }

    return (
        <ItemWrapper>
            <HeaderSecondary>{props.name}</HeaderSecondary>
            <ItemPhoto src={props.image} alt={props.name} />
            <ItemPrice>{price}</ItemPrice>
            <MenuForm onAddToBasket={addToBasketHandler}/>
        </ItemWrapper>
    )
}

export default MenuItem;