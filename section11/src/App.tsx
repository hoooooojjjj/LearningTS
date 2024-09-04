import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./component/Editor";
import { Todo } from "./types";
import TodoRender from "./component/TodoRender";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      todo: "",
    },
  ]);

  const onSubmit = (text: string) => {
    setTodos([...todos, { id: Date.now(), todo: text }]);
  };

  const onDelete = (id:number)=>{
    const filteredTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(filteredTodos)
  }


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
        <TodoRender key={todo.id} todo={todo} onDelete={onDelete}/>
      )
     )}
      </div>
    </div>
  );
}

export default App;
