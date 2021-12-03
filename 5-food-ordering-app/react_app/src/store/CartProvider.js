import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // concat adds and returns new array and does not modify old array
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems = [...state.items];
    if (existingIndex !== -1) {
      updatedItems[existingIndex].qty += action.item.qty;
    } else {
      updatedItems.push(action.item);
    }
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.qty;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let updatedItems = [...state.items];
    const newTotalAmount =
      state.totalAmount - updatedItems[existingIndex].price;
    if (updatedItems[existingIndex].qty === 1) {
      updatedItems.splice(existingIndex, 1);
    } else {
      updatedItems[existingIndex].qty -= 1;
    }
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
