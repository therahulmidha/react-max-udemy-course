import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export const Card = (props) => {
  return (
    <Fragment>
      <div className="card">
        <div className="info">
          <h4>{props.text}</h4>
          <p>{props.author}</p>
        </div>
        <div className="info-btn">
          {/* this should open Quote component via '/quote/:id' */}
          <Link to={`/quotes/${props.id}`} className="info-btn-link">
            View Fullscreen
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
