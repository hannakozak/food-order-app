import React from "react";

const BasketContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCard: () => {},
});

export default BasketContext;
