import { HeaderTetiary } from "../../styles/CommonStyles";

import { Wrapper, ItemPrice, SmallButton } from "./OrderItem.styles";

const OrderItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Wrapper>
      <div>
        <HeaderTetiary>{props.name}</HeaderTetiary>
        <ItemPrice>{price}</ItemPrice>
        <SmallButton primary>x{props.amount}</SmallButton>
      </div>
      <div>
        <SmallButton onClick={props.onRemove}>−</SmallButton>
        <SmallButton onClick={props.onAdd}>+</SmallButton>
      </div>
    </Wrapper>
  );
};

export default OrderItem;