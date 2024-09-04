import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";
import { Todo } from "./types";
import TodoRender from "./component/TodoRender";
type Action =
  | {
      type: "Submit";
      data: {
        id: number;
        text: string;
      };
    }
  | {
      type: "Delete";
      id: number;
    };

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "Submit":
      const newTodo = { id: action.data.id, todo: action.data.text };
      return [...state, newTodo];
    case "Delete":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: 0,
      todo: "",
    },
  ]);

  const onSubmit = (text: string) => {
    dispatch({ type: "Submit", data: { id: Date.now(), text } });
  };

  const onDelete = (id: number) => {
    dispatch({ type: "Delete", id });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Editor onSubmit={onSubmit}>
        <div>Children</div>
      </Editor>
      <div>
        {todos.map((todo) => (
          <TodoRender key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
