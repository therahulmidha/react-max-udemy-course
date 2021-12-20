import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>Cart is Empty!</h1>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                qty: item.qty,
                total: item.total,
                price: item.price,
              }}
            />
          ))
        )}
      </ul>
    </Card>
  );
};

export default Cart;
