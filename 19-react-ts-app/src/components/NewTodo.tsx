import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

export const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);

  // have to provide a type for useRef so that
  // it's clear that which element type is in focus
  // default value is mandatory
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (!enteredText.trim().length) {
      // throw an error
      return;
    }

    context.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
