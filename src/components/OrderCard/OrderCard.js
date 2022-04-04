import React, { useContext, useState } from "react";

import BasketContext from "../../context/basket-context";

import OrderItem from "./OrderItem";
import Modal from "../UI/Modal";
import { Button } from "../../styles/CommonStyles";

import { AmountWrapper, ActionButtons, Wrapper } from "./OrderCard.styles";
import { Checkout } from "./Checkout";

const OrderCard = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const basketCtx = useContext(BasketContext);

  const totalAmount = `$${basketCtx.totalAmount.toFixed(2)}`;

  const hasItems = basketCtx.items.length > 0;

  const orderItemRemoveHandler = (id) => {
    basketCtx.removeItem(id);
  };

  const orderItemAddHandler = (item) => {
    basketCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-order-app-ab838-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: basketCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    basketCtx.clearCard();
  };

  const orderItems = (
    <Wrapper>
      {basketCtx.items.map((item) => (
        <OrderItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={orderItemRemoveHandler.bind(null, item.id)}
          onAdd={orderItemAddHandler.bind(null, item)}
        />
      ))}
    </Wrapper>
  );

  const modalActions = (
    <ActionButtons>
      <Button onClick={props.onCloseBasket}>Close</Button>
      {hasItems && (
        <Button primary onClick={orderHandler}>
          Order
        </Button>
      )}
    </ActionButtons>
  );

  const orderCardContent = (
    <>
      {orderItems}
      <AmountWrapper>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </AmountWrapper>
      {isCheckout && (
        <Checkout
          onCancel={props.onCloseBasket}
          onConfirm={submitOrderHandler}
        />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingCardContent = <p>Sending order data ...</p>;
  const didSubmitCardContent = (
    <>
      <p> Successfully sent the order!</p>;
      <Button onClick={props.onCloseBasket}>Close</Button>
    </>
  );

  return (
    <Modal onCloseBasket={props.onCloseBasket}>
      {!isSubmitting && !didSubmit && orderCardContent}
      {isSubmitting && isSubmittingCardContent}
      {!isSubmitting && didSubmit && didSubmitCardContent}
    </Modal>
  );
};

export default OrderCard;
