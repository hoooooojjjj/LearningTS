import React, { useContext, useEffect, useReducer, useState } from "react";
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

export const TodosContext = React.createContext<Todo[] | null>(null);

export const TodosDispatchContext = React.createContext<{
  onSubmit: (text: string) => void;
  onDelete: (id: number) => void;
} | null>(null);

export const useDispatchContext = () => {
  const dispatchContext = useContext(TodosDispatchContext);

  if (!dispatchContext) {
    throw new Error("TodosDispatchContext 오류");
  }
  return dispatchContext;
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
      <TodosContext.Provider value={todos}>
        <TodosDispatchContext.Provider
          value={{
            onSubmit,
            onDelete,
          }}
        ></TodosDispatchContext.Provider>
        <Editor>
          <div>Children</div>
        </Editor>
        <div>
          {todos.map((todo) => (
            <TodoRender key={todo.id} todo={todo} />
          ))}
        </div>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
