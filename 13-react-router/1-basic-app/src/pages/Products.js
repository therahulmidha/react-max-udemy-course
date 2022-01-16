import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <li><Link to='/products/p1'>A book</Link></li>
      <li><Link to='/products/p2'>A carpet</Link></li>
      <li><Link to='/products/p3'>A course</Link></li>
    </section>
  );
};
