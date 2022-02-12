import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onDeleteTodo: React.MouseEventHandler;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>
      {props.text}
    </li>
  );
};
export default TodoItem;
