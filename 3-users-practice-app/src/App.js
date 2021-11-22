import { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Joey", age: 30 },
    { id: 2, userName: "Chandler", age: 31 },
    { id: 3, userName: "Ross", age: 32 },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  return (
    <div>
      <AddUserForm onUserInfoAdded={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
