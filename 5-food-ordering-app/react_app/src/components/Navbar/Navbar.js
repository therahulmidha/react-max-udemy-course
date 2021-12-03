import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import './Navbar.css';

export const Navbar = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=> {
    return curNumber + item.qty;
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx;

  const cartClasses = `cart ${btnIsHighlighted ? 'bump' : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <section className="navbar">
      <h1>ReactMeals</h1>
      <div className={cartClasses} onClick={props.onShowCart}>
        <span className="fas fa-shopping-cart"></span>
        <h4>Your Cart</h4>
        <p>({numberOfCartItems})</p>
      </div>
    </section>
  );
};
