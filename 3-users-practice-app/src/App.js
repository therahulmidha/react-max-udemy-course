import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";
import Validation from "./components/Validation";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "Joey", age: 30 },
    { id: 2, username: "Chandler", age: 31 },
    { id: 3, username: "Ross", age: 32 },
  ]);

  // const [validationPassed, setValidationPassed] = useState(true);
  // const [validationMessage, setValidationMessage] = useState('');
  // const [validationAck, setValidationAck] = useState(true);

  // const validationHandler = (isValid, message) => {
  //   !isValid && setValidationPassed(false) && setValidationMessage(message);
  // }
  
  // const validationViewedHandler = (ack) => {
  //   ack && setValidationAck(true);
  // }

  // if(!validationPassed) {
  //   return (
  //     <div>
  //       <Validation message={message} ack={}/>
  //     </div>
  //   )
  // }

  return (
    <div>
      <AddUserForm />
      <UserList users={users}/>
    </div>
  );
}

export default App;
