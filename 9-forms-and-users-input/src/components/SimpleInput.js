import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: isNameValid,
    hasError: isNameInvalid,
    valueInputChangedHandler: nameInputChangedHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: isEmailInvalid,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid;
  if (isNameValid && isEmailValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // These constants are updated time to time
    // when setEnteredName and setIsNameTouched change the state
    // and after each state changes, the component is re-rendered
    if (!isNameValid || !isEmailValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameFormClass = isNameInvalid ? "form-control invalid" : "form-control";
  const emailFormClass = isEmailInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameFormClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
        />
        {isNameInvalid && <p>Name is not valid</p>}
      </div>
      <div className={emailFormClass}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
        />
        {isEmailInvalid && <p>Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
