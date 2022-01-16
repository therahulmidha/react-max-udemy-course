import "./Quote.css";
import { Comments } from "../Comments/Comments";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import { getSingleQuote } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";

export const Quote = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!loadedQuote?.text) {
    return <p>No Quote Found matching the passed param</p>;
  }

  return (
    <div className="quote">
      <div className="quote-card">
        <h2>{loadedQuote.text}</h2>
        <p>{loadedQuote.author}</p>
      </div>
      <Route path={match.path} exact>
        <Link to={`${match.url}/comments`} className="load-comments">
          Load Comments
        </Link>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
