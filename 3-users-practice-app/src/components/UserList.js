import "./UserList.css";

const UserList = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <p>{`${user.id} ${user.username} ${user.age}`}</p>
      ))}
    </div>
  );
};

export default UserList;
