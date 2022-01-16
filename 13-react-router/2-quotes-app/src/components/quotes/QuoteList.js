import { useEffect } from "react";
import { Card } from "../Card/Card";
import "./QuoteList.css";
import { useHistory, useLocation } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const DUMMY_QUOTES = [
  { id: 1, text: "No Pain No Gain", author: "Unknown" },
  { id: 2, text: "Be proud of who you are!", author: "ARK" },
];
export const QuoteList = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p>No Quotes Found</p>;
  }

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(loadedQuotes, isSortingAscending);
  const sortHandler = () => {
    // this will reload this component also
    history.push(
      `${location.pathname}?sort=` + (isSortingAscending ? "desc" : "asc")
    );
  };

  return (
    <div className="quote-list">
      <button onClick={sortHandler}>
        Sort {isSortingAscending ? "Descending" : "Ascending"}
      </button>
      <hr />
      {sortedQuotes.map((quote) => (
        <Card
          key={quote.id}
          id={quote.id}
          text={quote.text}
          author={quote.author}
        />
      ))}
    </div>
  );
};
