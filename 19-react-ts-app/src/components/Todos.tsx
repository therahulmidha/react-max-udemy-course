import React, { useContext } from "react";
import { Todo } from "../models/todo";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {context.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={context.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
