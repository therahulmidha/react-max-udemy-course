import './Navbar.css';

export const Navbar = () => {
  return (
    <section className="navbar">
      <h1>ReactMeals</h1>
      <div className="cart">
        <span className="fas fa-shopping-cart"></span>
        <h4>Your Cart</h4>
        <p>0</p>
      </div>
    </section>
  );
};
