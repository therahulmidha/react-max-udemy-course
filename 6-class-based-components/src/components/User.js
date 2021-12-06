import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }

  // If !this.state.showUsers, then userlist component is removed
  componentWillUnmount() {
    console.log("A user was removed/unmounted");
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
