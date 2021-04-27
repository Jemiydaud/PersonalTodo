import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList({todos, deleteTodo,completedTodo, editTodo}) {
  //console.log("todos", todos);
return(
  <div className="todo-ul">
    <ul>
    {todos.map((todo, index) => (
      <Todo
      key={index}
      id={todo.id}
      title={todo.title}
      isDone ={todo.isDone}
      deleteTodo={deleteTodo}
      completedTodo={completedTodo}
      editTodo={editTodo}
      />
    ))}
    </ul>
  </div>
);
}
export default TodoList;
