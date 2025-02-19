import AddTodo from './Components/AddTodo'
import TodoItems from './Components/TodoItems'
import AppName from './Components/AppName'
import Welcomemsg from './Components/Welcomemsg'
import './App.css'
import { useState } from 'react';
import { TodoItemContext } from './Store/todoitem-context-api'
function App() {

  const initialitems = [{
    name: "Goto Temple",
    duedate: "4-10-2024",
  },
  {
    name: "Buy Milk",
    duedate: "4-10-2024",
  },
  ];

  let [todoItems, setTodoItems] = useState(initialitems);

  const addNewItems = (todoName, todoDate) => {
    setTodoItems((currvalue) => [...currvalue,{ name: todoName, duedate: todoDate }])
  }

  const deleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName );
    setTodoItems(newTodoItems);
  }

  return <>
     <TodoItemContext.Provider value={{todoItems, addNewItems ,deleteItems}} >
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo></AddTodo>
     <Welcomemsg></Welcomemsg>
      <TodoItems></TodoItems>
    </center>
    </TodoItemContext.Provider>
  </>

}

export default App
