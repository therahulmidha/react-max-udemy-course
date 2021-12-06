import { Fragment, useState, useEffect } from "react";
import { Component } from "react/cjs/react.production.min";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  // only one context can be attached to a component
  static contextType = UsersContext;

  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value,
    });
  }

  // useEffect(()=>{}, [])
  componentDidMount() {
    console.log("Component mounted");
    // send http request and set initial data
    this.setState({ filteredUsers: this.context.users });
  }

  // useEffect(()=>{}, [searchTerm])
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("Component updated");
      this.setState({
        filteredUsers: this.state.filteredUsers.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

// useEffect(() => {
//   setFilteredUsers(
//     DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//   );
// }, [searchTerm]);

// const searchChangeHandler = (event) => {
//   setSearchTerm(event.target.value);
// };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
