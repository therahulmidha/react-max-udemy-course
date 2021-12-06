import { useState, Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();

    // name should be exactly state
    this.state = {
      showUsers: true,
      otherState: "test",
      someOtherState: [],
    };
  }

  componentDidUpdate() {
    // In case any network request to a server failed due to server issues
    if (this.props.users.length === 0) {
      throw new Error("No users provided");
    }
  }

  toggleUsersHandler() {
    // React does not overwrites, but merges new state with prevState
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
