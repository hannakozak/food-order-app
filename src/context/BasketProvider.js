import BasketContext from "./basket-context";

const BasketProvider = (props) => {

    const addItemToBasketHandler = (item) => {};

    const removeItemFromBasket = (id) => {};

    const basketContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToBasketHandler,
        removeItem: removeItemFromBasket,
    }

  return (
      <BasketContext.Provider value={basketContext}>
          {props.children}
      </BasketContext.Provider>
  )
}

export default BasketProvider;