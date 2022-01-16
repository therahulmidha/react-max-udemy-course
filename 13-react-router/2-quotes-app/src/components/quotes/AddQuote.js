import { Fragment } from "react/cjs/react.production.min";
import "./AddQuote.css";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useHistory, Prompt } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

export const AddQuote = () => {
  const history = useHistory();
  const authorRef = useRef();
  const textRef = useRef();
  const [isEntering, setIsEntering] = useState(false);
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const submitHandler = async (event) => {
    event.preventDefault();
    await sendRequest({
      id: Date.now(),
      author: authorRef.current.value,
      text: textRef.current.value,
    });
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure, you want to leave? All your entered data will be lost!"
        }
      />
      {status === "pending" && (
        <div className="loading">
          <LoadingSpinner />
        </div>
      )}
      <form onFocus={formFocusedHandler} onSubmit={submitHandler}>
        <label htmlFor="author">Author</label>
        <input name="author" ref={authorRef} />
        <label htmlFor="text">Text</label>
        <textarea name="text" ref={textRef} />
        <div className="btn-container">
          <button onClick={finishEnteringHandler}>Add Quote</button>
        </div>
      </form>
    </Fragment>
  );
};
