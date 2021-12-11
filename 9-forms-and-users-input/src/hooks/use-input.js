import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
      setEnteredValue('');
      setIsTouched('');
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueInputChangedHandler,
    valueInputBlurHandler,
    reset
  };
};

export default useInput;
