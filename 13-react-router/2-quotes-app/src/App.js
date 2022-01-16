import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AddQuote } from "./components/quotes/AddQuote";
import { NotFound } from "./components/quotes/NotFound";
import { Quote } from "./components/quotes/Quote";
import { QuoteList } from "./components/quotes/QuoteList";
import { Welcome } from "./components/quotes/Welcome";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quote />
          </Route>
          <Route path="/quotes" exact>
            <QuoteList />
          </Route>
          <Route path="/new-quote">
            <AddQuote />
          </Route>
          {/* Any url not found above */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
