import React,{useState} from 'react';
import'./NewTodoInput.css';

/*
// Add state
1_ import useState
2_ decostruct inputValue, setInputValue useState(), default valur wwill be ''
3_ set input value={inputValue}

// save newInput
1_ create handleInputValue func
2_ call handleInputValue onChange
3_ setInputValue to the target.value

// handle onKeyDown
1_ create new func handleOnKyeDown
2_ call handleOnKyeDown onKeyDown
3_ if keyCode === 13 then call saveTodo()

// save new todo
1_ create new func saveTodo
2_ call saveTodo from button onClick
3_ create newTodo
4_ call addTodo(newTodo)
5_ clear input value

*/

function NewTodoInput ({ addTodo}) {
  const [inputValue, setInputValue] = useState('');


 function handleInputValue({target}){
   setInputValue(target.value)
 }

 function handleOnKeyDown({keyCode}) {
   if (keyCode === 13) saveNewTodo();

     // update the state: setInputValue(target.value)
     // if keyCode === 13 saveNewTodo
   }



   function saveNewTodo() {
     const newTodo = {
       id: (Date.now() + Math.random()).toString(),
       title: inputValue,
       isDone: false,

     };

     addTodo(newTodo);

     setInputValue("")

     // create new Todo
     // const newTodo = {newTodo, ...todoState}
     // REMEMBER: YOU NEED TO CHANGE THE TITLE from taregt.value to the state
     // addTodo(newTodo);
     // target.value = ''
   }

   return (
     <div>
       <input
         type="text"
         value={inputValue}
         className="new-input"
         placeholder="write your list here"
         // call here the handleOnKeyDown func
         onKeyDown={handleOnKeyDown}
         onChange={handleInputValue}
       />
       {/* onClick call saveNewTodo */}
        <button onClick={saveNewTodo}>Add</button>
     </div>
   );
 }

 export default NewTodoInput;
