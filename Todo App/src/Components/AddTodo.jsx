import { useState } from 'react';
import Styles from './AddTodo.module.css'
const AddTodo = ({ onNewItem }) => {

    const[todoName,setTodoName] = useState("");
    const[duedate,setDueDate] = useState("");

    const handleNameChanged = (event) => {
      setTodoName(event.target.value);
    }

    const handleDateChanged = (event) => {
      setDueDate(event.target.value);
    }

    const handleOnAddButton = () => {
          onNewItem(todoName,duedate);
          setTodoName("");
          setDueDate("");
    }

  return <div className="container text-center">
    <div className="row kg-row">
      <div className="col-4">
        <input className={Styles.inputTodo} type="text" placeholder="Enter todo here" value={todoName} onChange={(event)=>handleNameChanged(event)} />
      </div>
      <div className="col-4">
        <input className={Styles.inputTodo} type="date" value={duedate} onChange={(event)=>handleDateChanged(event)} />
      </div>
      <div className="col-2 d-flex align-items-center">
        <button type="button" className="btn btn-success kg-button "  onClick={handleOnAddButton}>ADD</button>
      </div>
    </div>
  </div>
}

export default AddTodo;