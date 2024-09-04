import React from 'react'
import { Todo } from '../types';

interface Props {
    todo : Todo
    onDelete: (id:number)=>void
}


function TodoRender(props:Props) {
  return (
  <div>{props.todo.todo}<button onClick={()=>props.onDelete(props.todo.id)}>Delete</button></div>
  )
}

export default TodoRender