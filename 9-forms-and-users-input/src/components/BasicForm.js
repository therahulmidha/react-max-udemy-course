import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: isFirstNameInvalid,
    valueInputChangedHandler: firstnameInputChangedHandler,
    valueInputBlurHandler: firstnameInputBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    hasError: isLastNameInvalid,
    valueInputChangedHandler: lastnameInputChangedHandler,
    valueInputBlurHandler: lastnameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: isEmailInvalid,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;
  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!isFirstNameValid && !isLastNameValid && !isEmailValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstnameInputChangedHandler}
            onBlur={firstnameInputBlurHandler}
          />
        </div>
        {isFirstNameInvalid && <p>First Name is invalid</p>}
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastnameInputChangedHandler}
            onBlur={lastnameInputBlurHandler}
          />
        </div>
        {isLastNameInvalid && <p>Last Name is invalid</p>}
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailInputChangedHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {isEmailInvalid && <p>Email is invalid</p>}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
