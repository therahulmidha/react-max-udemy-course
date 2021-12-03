import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import "./MenuItemActions.css";
export const MenuItemActions = (props) => {
  const enteredAmount = useRef();
  const cartCtx = useContext(CartContext);

  const itemAddedClick = (event) => {
    const enteredAmountValue = enteredAmount.current.value;
    if (enteredAmountValue.trim().length === 0 || enteredAmountValue < 1) {
      alert("Please Enter valid amount");
      return;
    }
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      qty: +enteredAmountValue,
    });
  };

  return (
    <div className="menu-item-actions">
      <h4>Amount</h4>
      <input type="number" min="1" max="50" ref={enteredAmount} />
      <button onClick={itemAddedClick}>+Add</button>
    </div>
  );
};
