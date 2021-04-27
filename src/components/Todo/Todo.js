import React,{useState} from "react";
import EditTodo from "../EditTodo/EditTodo.js";
import "./Todo.css";

function Todo ({title, isDone, id, deleteTodo,completedTodo,editTodo,isEdit }){
  return(
  <div>
  {isEdit ? (
    <EditTodo title={title}/>
  ):
    (
      <li className={isDone ? "itemDone" : ""}>
      <div>
      <input
      type="checkbox"
      className="checkbox"
      Checked={isDone}
      onChange = {() =>completedTodo(id)}
      />
      {title}
      </div>
      <button onClick={()=>editTodo(id)} className ="">edit</button>
      <button onClick={() => deleteTodo(id)}>x</button>
      </li>
    )
  }
  </div>
  );
}

export default Todo;
