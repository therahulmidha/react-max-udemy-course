import { Fragment, useContext } from "react";
import classes from "./Cart.module.css";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>Your Cart</h2>
      </header>
      <div className={classes.content}>
        {cartCtx.items.length === 0 && <h3 style={{textAlign: "center"}}>Your cart is empty!</h3>}
        {cartCtx.items.map((item) => (
          <CartItem
            id={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        ))}
        <div className={classes["total-section"]}>
          <h3>Total Amount</h3>
          <p>$ {cartCtx.totalAmount.toFixed(2)}</p>
        </div>
      </div>
      {cartCtx.items.length !== 0 && <footer className={classes.actions}>
        <button onClick={props.onConfirm}>Cancel</button>
        <button>Order</button>
      </footer>}
    </div>
  );
};

export const Cart = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onHideCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title="{props.title}"
          message="{props.message}"
          onConfirm={props.onHideCart}
          items={props.items}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
