import "./Menu.css";

export const Menu = (props) => {
  const itemAddedClick = (event) => {
    console.log("Item added click");
  };

  const itemAddedOnChange = (event) => {
    console.log("Item added");
  };
  return (
    <section className="menu">
      {props.menuItems.map((item) => (
        <div className="menu-item" key={item.id}>
          <div className="menu-item-info">
            <div className="dish-name">{item.name}</div>
            <div className="dish-desc">{item.desc}</div>
            <div className="dish-price">${item.price}</div>
          </div>
          <div className="menu-item-actions">
            <h4>Amount</h4> 
            <input type="number" min="1" max="50"  onChange={itemAddedOnChange}/>
            <button onClick={itemAddedClick}>+Add</button>
          </div>
        </div>
      ))}
    </section>
  );
};
