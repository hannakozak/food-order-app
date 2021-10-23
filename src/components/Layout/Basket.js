import React from 'react';

import BasketIcon from './BasketIcon';
import { Icon, BusketWrapper, BusketItems } from './Basket.styles';

const Basket = () => {
    return (
        <BusketWrapper>
            <Icon>
                <BasketIcon />
            </Icon>
            <BusketItems>3</BusketItems>
        </BusketWrapper>
    )
}

export default Basket;