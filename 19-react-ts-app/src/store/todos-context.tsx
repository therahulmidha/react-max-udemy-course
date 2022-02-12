import React, { useState } from "react";
import { Todo } from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.concat(new Todo(text));
    });
  };

  const onDeleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: onDeleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
