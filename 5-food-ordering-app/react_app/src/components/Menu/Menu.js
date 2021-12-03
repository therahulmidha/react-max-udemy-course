import "./Menu.css";
import { useRef, useState } from "react";
import { MenuItemActions } from "./MenuItemActions";

export const Menu = (props) => {
  const [menuItems] = useState([
    {
      id: 1,
      name: "McAloo Tikki Burger",
      desc: "Signature Burger with cheesy twist",
      price: 10,
      qty: 0,
    },
    {
      id: 2,
      name: "Pizza Mcpuff",
      desc: "Taste of pizza in a puff",
      price: 20,
      qty: 0,
    },
    {
      id: 3,
      name: "McVeggie Burger",
      desc: "All mayo cream burger",
      price: 30,
      qty: 0,
    },
  ]);

  // const [itemIdInFocus, setItemIdInFocus] = useState('');
  const idInFocus = useRef();

  return (
    <section className="menu">
      {menuItems.map((item) => (
        <div className="menu-item" key={item.id} ref={idInFocus}>
          <input type="hidden" value={item.id} />
          <div className="menu-item-info">
            <div className="dish-name">{item.name}</div>
            <div className="dish-desc">{item.desc}</div>
            <div className="dish-price">${item.price}</div>
          </div>
          <MenuItemActions id={item.id} name={item.name} price={item.price} />
        </div>
      ))}
    </section>
  );
};
