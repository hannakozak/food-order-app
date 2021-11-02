import React, { useContext } from 'react';

import BasketContext from '../../context/basket-context';

import OrderItem from './OrderItem';
import Modal from '../UI/Modal';
import { Button } from '../../styles/CommonStyles'

import { AmountWrapper, ActionButtons, Wrapper } from './OrderCard.styles';

const OrderCard = (props) => {
    const basketCtx = useContext(BasketContext);

    const totalAmount = `$${basketCtx.totalAmount.toFixed(2)}`;

    const hasItems = basketCtx.items.length > 0;

    const orderItemRemoveHandler = (id) => {
        basketCtx.removeItem(id);
    }

    const orderItemAddHandler = (item) => {
        basketCtx.addItem({ ...item, amount: 1})
    }

    const orderItems = <Wrapper>
        {
            basketCtx.items.map((item)=>
                <OrderItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={orderItemRemoveHandler.bind(null, item.id)}
                    onAdd={orderItemAddHandler.bind(null, item)}
                />
            )
        }
    </Wrapper>
    return (
        <Modal onCloseBasket={props.onCloseBasket}>
            {orderItems}
            <AmountWrapper>
                <div>Total Amount</div>
                <div>{totalAmount}</div>
            </AmountWrapper>
            <ActionButtons>
                <Button onClick={props.onCloseBasket}>Close</Button>
                {hasItems && <Button primary>Order</Button>}
            </ActionButtons>
        </Modal>
    )
}

export default OrderCard;