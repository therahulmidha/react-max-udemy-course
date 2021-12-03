import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const decQty = () => {
    cartCtx.removeItem(props.id);
  };

  const incQty = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      qty: 1,
    });
  };

  return (
    <div className={classes["cart-item"]} key={props.id}>
      <div className={classes["cart-item-info"]}>
        <h4>{props.name}</h4>
        <div className={classes["cart-item-price-qty-info"]}>
          <p className={classes.price}> ${props.price}</p>
          <p>x {props.qty}</p>
        </div>
      </div>
      <div className={classes["cart-item-modify"]}>
        <button className={classes.modifyQtyBtn} onClick={decQty}>
          -
        </button>
        <button className={classes.modifyQtyBtn} onClick={incQty}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
