import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitErrorOccured, setSubmitErrorOccured] = useState(null);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    item.amount = 1;
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setShowCheckout((show) => !show);
  };

  const checkoutConfirmHandler = async (userData) => {
    setIsSubmitting(true);
    setDidSubmit(false);

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        name: userData.name,
        address: userData.address,
        items: cartCtx.items.map((item) => {
          delete item.id;
          return item;
        }),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setSubmitErrorOccured("Unable to create order");
      setIsSubmitting(false);
      setDidSubmit(false);
    } else {
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    }
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartNotSubmittingContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && <Checkout onConfirm={checkoutConfirmHandler} />}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </React.Fragment>
  );

  const cartSubmissionInProgress = <p>Placing Order....</p>;
  const cartSubmissionSuccess = <p>Order Placed Successfully!</p>;
  const cartSubmissionError = <p>An Error Occured while placing the order</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting &&
        !didSubmit &&
        !submitErrorOccured &&
        cartNotSubmittingContent}
      {isSubmitting && !didSubmit && cartSubmissionInProgress}
      {!isSubmitting && didSubmit && cartSubmissionSuccess}
      {!isSubmitting && !didSubmit && submitErrorOccured && cartSubmissionError}
    </Modal>
  );
};

export default Cart;
