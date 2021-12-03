import { Info } from "./components/Info/Info";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler} items={[]} />}
      <Navbar onShowCart={showCartHandler} />
      <Info />
      <Menu />
    </CartProvider>
  );
}

export default App;
