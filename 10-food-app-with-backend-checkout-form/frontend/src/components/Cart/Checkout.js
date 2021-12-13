import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const userData = {
      name: nameInput.current.value,
      address: {
        street: streetInput.current.value,
        postal: postalInput.current.value,
        city: cityInput.current.value,
      },
    };

    props.onConfirm(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">city</label>
        <input type="text" id="city" ref={cityInput} />
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
