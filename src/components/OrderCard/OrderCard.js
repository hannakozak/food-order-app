import React from 'react';

import OrderItem from './OrderItem';
import Modal from '../UI/Modal';
import { Button } from '../../styles/CommonStyles'

import { AmountWrapper, ActionButtons } from './OrderCard.styles';

const OrderCard = (props) => {

    const orderItems = <ul>
        {
            [{id: 1, name: 'Sushi', amount: 2, price: 20}].map((item)=>
                <OrderItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                />
            )
        }
    </ul>
    return (
        <Modal onCloseBasket={props.onCloseBasket}>
            {orderItems}
            <AmountWrapper>
                <div>Total Amount</div>
                <div>$35</div>
            </AmountWrapper>
            <ActionButtons>
                <Button onClick={props.onCloseBasket}>Close</Button>
                <Button primary>Order</Button>
            </ActionButtons>
        </Modal>
    )
}

export default OrderCard;