import { Info } from "./components/Info/Info";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "McAloo Tikki Burger",
      desc: "Signature Burger with cheesy twist",
      price: 20.5,
      qty: 0,
    },
    {
      id: 2,
      name: "Pizza Mcpuff",
      desc: "Taste of pizza in a puff",
      price: 19.5,
      qty: 0,
    },
    {
      id: 3,
      name: "McVeggie Burger",
      desc: "All mayo cream burger",
      price: 45.99,
      qty: 0,
    },
  ]);

  const showCartHandler = (show) => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      {showCart && <Cart onHideCart={hideCartHandler} items={menuItems} />}
      <Navbar onShowCart={showCartHandler} />
      <Info />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
