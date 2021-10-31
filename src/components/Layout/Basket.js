import React, { useContext } from 'react';

import BasketContext from '../../context/basket-context';

import BasketIcon from './BasketIcon';
import { Icon, BasketWrapper, BasketItems } from './Basket.styles';

const Basket = (props) => {

    const basketCtx = useContext(BasketContext);
    const { items } = basketCtx;

    const numberOfBasketItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return (
        <BasketWrapper onClick={props.onOpenBasket}>
            <Icon>
                <BasketIcon />
            </Icon>
            <BasketItems>{numberOfBasketItems}</BasketItems>
        </BasketWrapper>
    )
}

export default Basket;