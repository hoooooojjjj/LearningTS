import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";

function App() {
  interface Todo {
    id: number;
    todo: string;
  }
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      todo: "",
    },
  ]);

  const onSubmit = (text: string) => {
    setTodos([...todos, { id: Date.now(), todo: text }]);
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
    </div>
  );
}

export default App;
