import React, {useState} from "react";
import './index.css';
import NewTodoInput from './components/NewTodoInput/NewTodoInput.js';
import TodoList from './components/TodoList/TodoList.js';
import EditTodo from './components/EditTodo/EditTodo.js';
//const addTodoBtn = 'Add New Todo BTN';

// const todosData = [
//   {
//     id: "223565673",
//     title: "Do grocery",
//     isDone: false
//   },
//   {
//     id: "122448754",
//     title: "Enjoy your easter with family",
//     isDone: true
//   },
//   {
//     id: "234566780",
//     title:"Learn about props",
//     isDone:false
//   }
// ];

export default function App() {
  const [todosState, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []);

   function handleDelete(todoId) {
    const newTodos = todosState.filter(( {id} ) => id !== todoId);
    setTodos(newTodos);
    handleSaveTodo(newTodos)
   }

   function handleNewTodo(newTodo) {
    const newTodos = [newTodo, ...todosState];
    //setTodos(newTodos);
    handleSaveTodo(newTodos)
  }

  function handleCompleteTodo(todoId) {
   const newTodos = todosState.map((todo) => {
    if (todo.id === todoId) {
      todo.isDone = !todo.isDone;
    }
       return todo;
     });

     setTodos(newTodos) ;
     handleSaveTodo(newTodos)
   }
   function handleSaveTodo(newTodos){
     setTodos((prev) =>{
       localStorage.setItem("todos", JSON.stringify(newTodos));
       return newTodos;
     });
   }

   function handleEdit(editedId, editedTitle){
     const newTodos = todosState.map((todo) => {
      if (todo.id === editedId) {
        todo.title = editedTitle;
      }
         return todo;
       });

       handleSaveTodo(newTodos)
   }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
        <p>Today is a new Day!</p>
      </header>

      <main>
      <NewTodoInput addTodo={handleNewTodo} />
      <TodoList
      todos={todosState}
      deleteTodo={handleDelete}
      completedTodo={handleCompleteTodo}
      editTodo={handleEdit}
      />
      <button className='clear-btn' onClick={() =>handleSaveTodo([])}>Clear All</button>
      </main>
      <footer className="footer">Copyright Jemi Daud 2021 </footer>
    </div>
  );
}


