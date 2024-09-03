import React, { ReactElement, useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
  children: ReactElement;
}

function Editor(props: Props) {
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClick = () => {
    props.onSubmit(text);
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
