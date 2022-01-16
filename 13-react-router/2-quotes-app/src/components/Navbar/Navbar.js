import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <section>
      <nav>
        <div className="heading">
          <Link to="/" className="router-links">
            Great Quotes
          </Link>
        </div>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className="router-links"
              activeClassName="active-link"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className="router-links"
              activeClassName="active-link"
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
