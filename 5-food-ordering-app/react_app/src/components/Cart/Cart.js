import { Fragment } from "react";
import classes from "./Cart.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>Your Cart</h2>
      </header>
      <div className={classes.content}>
        {props.items
          .filter((item) => item.qty > 0)
          .map((item) => (
            <div className={classes.cart_item}>
              <div className={classes.cart_item_info}>
                <h4>{item.name}</h4>
                <div className={classes.cart_item_price_qty_info}>
                  <p className={classes.price}> ${item.price}</p>
                  <p>x {item.qty}</p>
                </div>
              </div>
              <div className={classes.cart_item_modify}>
                <button className={classes.modifyQtyBtn}>-</button>
                <button className={classes.modifyQtyBtn}>+</button>
              </div>
            </div>
          ))}
        <div className={classes.total_section}>
          <h3>Total Amount</h3>
          <p>$ props.total</p>
        </div>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onConfirm}>Cancel</button>
        <button>Order</button>
      </footer>
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
