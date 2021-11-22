import { useState } from "react";
import "./AddUserForm.css";
import Validation from "./Validation";

const AddUserForm = (props) => {
  const [age, setAge] = useState("");
  const [userName, setUserName] = useState("");
  const userFormSubmitHandler = (event) => {
    event.preventDefault();
    if (age === "" || userName === "") {
      setValidationPassed(false);
      setValidationMessage("Age and userName are both required to be filled");
      return;
    }
    if (userName.length < 3) {
      setValidationPassed(false);
      setValidationMessage("userName should be atleast 3 characters long");
      return;
    }

    let user = {
      id: Math.random(),
      age,
      userName,
    };
    props.onUserInfoAdded(user);
    setUserName("");
    setAge("");
  };

  const userNameOnChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageOnChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const [validationPassed, setValidationPassed] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

  const validationViewedHandler = () => {
    setValidationPassed(true);
  };

  if (!validationPassed) {
    return (
      <div>
        <Validation message={validationMessage} onAck={validationViewedHandler} />
      </div>
    );
  }

  return (
    <form onSubmit={userFormSubmitHandler}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={userNameOnChangeHandler}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          min="1"
          max="120"
          value={age}
          onChange={ageOnChangeHandler}
        />
      </div>
      <input type="submit" value="Add User" />
    </form>
  );
};

export default AddUserForm;
