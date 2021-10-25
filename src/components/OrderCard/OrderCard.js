import React from 'react';

import Modal from '../UI/Modal';
import {Button} from './OrderCard.styles'

const OrderCard = (props) => {

    const orderItems = <ul>
        {
            [{id: 1, name: 'Sushi', amount: 2, price: 20}].map((item)=>
            <li>{item.name}</li>)
        }
    </ul>
    return (
        <Modal>
            {orderItems}
            <div>
                <span>Total Amount</span>
                <spam>35</spam>
            </div>
            <div>
                <Button>Close</Button>
                <Button>Order</Button>
            </div>
        </Modal>
    )
}

export default OrderCard;