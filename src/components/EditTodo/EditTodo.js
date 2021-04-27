import React, {useState} from "react";
//import NewTodoInput from './components/NewTodoInput/NewTodoInput.js'

// create Edit Task UI
//     1_ create a new React component EditTodo.js
//     2_ We will create input field + button (edit todo)
//     3_ input default value is the current todo value
//     4_ when input value is changed, save the new value in the state
//        -> here you will need to use useState
//     5_ when user click the button, save the value of the field in the todo array
//        -> Here you will need to use a callback function and handle the function in App.js
//     6_ go to Todo.js and add a edit button
//     7_ when click edit, conditionally show Edit.js or input+text+delete /edit buttons

function EditTodo ({title, id, handleIsEdit, editTodo,}) {
  const [inputValue, setInputValue] = useState(title);

  function handleOnKeyDown({keyCode}) {
    if (keyCode === 13) {
      saveNewTodo();
    }
  }

 function handleInputValue({target}){
   setInputValue(target.value)
 }

   function saveNewTodo() {
     handleIsEdit(false);
     editTodo(id, inputValue);
   }

   function handleInputValue({ target }) {
       setInputValue(target.value);
     }
 //   function handleSaveButton() {
 //   handleIsEdit(false);
 //   editTodo(id, inputValue);
 // }

   return (
     <div>
       <input
         type="text"
         value={inputValue}
         className="new-input"
         onKeyDown={handleOnKeyDown}
         onChange={handleInputValue}
       />
        <button onClick={saveNewTodo}>Update</button>
     </div>
   );
 }
export default EditTodo;
