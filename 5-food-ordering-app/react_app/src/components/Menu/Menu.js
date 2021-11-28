import "./Menu.css";

export const Menu = () => {
  return (
    <section className="menu">
      <div className="menu-item">
        <div className="menu-item-info">
          <div className="dish-name">Sushi</div>
          <div className="dish-desc">Finest fish and veggies</div>
          <div className="dish-price">$22.99</div>
        </div>
        <div className="menu-item-actions">
          <h4>Amount</h4> <input type="number" min="1" max="50" value="1" />
          <button>+Add</button>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-info">
          <div className="dish-name">Sushi</div>
          <div className="dish-desc">Finest fish and veggies</div>
          <div className="dish-price">$22.99</div>
        </div>
        <div className="menu-item-actions">
          <h4>Amount</h4> <input type="number" min="1" max="50" value="1" />
          <button>+Add</button>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-info">
          <div className="dish-name">Sushi</div>
          <div className="dish-desc">Finest fish and veggies</div>
          <div className="dish-price">$22.99</div>
        </div>
        <div className="menu-item-actions">
          <h4>Amount</h4> <input type="number" min="1" max="50" value="1" />
          <button>+Add</button>
        </div>
      </div>
    </section>
  );
};
