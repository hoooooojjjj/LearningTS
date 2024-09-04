import React, { ReactElement, useContext, useState } from "react";
import { TodosContext, TodosDispatchContext, useDispatchContext } from "../App";

interface Props {
  children: ReactElement;
}

function Editor(props: Props) {
  const [text, setText] = useState<string>("");

  const dispatchContext = useDispatchContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClick = () => {
    dispatchContext.onSubmit(text);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={onChange}></input>
      <button onClick={onClick}>submit</button>
    </>
  );
}

export default Editor;
