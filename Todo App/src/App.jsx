import AddTodo from './Components/AddTodo'
import TodoItems from './Components/TodoItems'
import AppName from './Components/AppName'
import Welcomemsg from './Components/Welcomemsg'
import './App.css'
import { useState } from 'react';
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

  let [todoitems, setTodoItems] = useState(initialitems);

  const handleNewItems = (todoName, todoDate) => {
    setTodoItems((currvalue) => [...currvalue,{ name: todoName, duedate: todoDate }])
  }

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoitems.filter(item => item.name !== todoItemName );
    setTodoItems(newTodoItems);
  }

  return <>

    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItems}></AddTodo>
      {todoitems.length===0&&<Welcomemsg></Welcomemsg>}
      <TodoItems onDeleteItem = {handleDeleteItems} Items={todoitems}></TodoItems>
    </center>
  </>

}

export default App
