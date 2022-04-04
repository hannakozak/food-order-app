import { useReducer } from "react";
import BasketContext from "./basket-context";

const defaultBasketState = {
  items: [],
  totalAmount: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingBasketItem = state.items[existingBasketItemIndex];
    let updatedItems;

    if (existingBasketItem) {
      const updatedItem = {
        ...existingBasketItem,
        amount: existingBasketItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingBasketItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingBasketItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingBasketItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultBasketState;
  }

  return defaultBasketState;
};

const BasketProvider = (props) => {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasketState
  );

  const addItemToBasketHandler = (item) => {
    dispatchBasketAction({ type: "ADD", item: item });
  };

  const removeItemFromBasket = (id) => {
    dispatchBasketAction({ type: "REMOVE", id: id });
  };

  const clearCardHandler = () => {
    dispatchBasketAction({ type: "CLEAR" });
  };

  const basketContext = {
    items: basketState.items,
    totalAmount: basketState.totalAmount,
    addItem: addItemToBasketHandler,
    removeItem: removeItemFromBasket,
    clearCard: clearCardHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
