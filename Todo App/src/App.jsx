import AddTodo from './Components/AddTodo'
import TodoItems from './Components/TodoItems'
import AppName from './Components/AppName'
import './App.css'
function App() {

  const todoitems = [{
     name : "Goto Temple",
     duedate : "4-10-2024",
  },
 {
  name : "Buy Milk",
  duedate : "4-10-2024",
 },
];

  return <> 

  <center className='todo-container'>
  <AppName></AppName>
  <AddTodo></AddTodo> 
  <TodoItems Items = {todoitems}></TodoItems>
  </center>
  </>

}

export default App
