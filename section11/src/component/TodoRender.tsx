import React from "react";
import { Todo } from "../types";
import { useDispatchContext } from "../App";

interface Props {
  todo: Todo;
}

function TodoRender(props: Props) {
  const dispatchContext = useDispatchContext();
  return (
    <div>
      {props.todo.todo}
      <button onClick={() => dispatchContext.onDelete(props.todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoRender;
