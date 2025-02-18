import { useRef } from 'react';
import Styles from './AddTodo.module.css';

const AddTodo = ({ onNewItem }) => {
    const todoNameElement = useRef(null);
    const todoDateElement = useRef(null);

    const handleOnAddButton = (event) => {
        event.preventDefault();  // Prevent page reload

        const todoName = todoNameElement.current.value;
        const dueDate = todoDateElement.current.value;

        if (!todoName.trim()) {
            alert("Todo name cannot be empty!");
            return;
        }

        onNewItem(todoName, dueDate);

        // Clear inputs after adding
        todoNameElement.current.value = "";
        todoDateElement.current.value = "";
    };

    return (
        <div className="container text-center">
            <form className="row kg-row" onSubmit={handleOnAddButton}>
                <div className="col-4">
                    <input className={Styles.inputTodo} type="text" placeholder="Enter todo here" ref={todoNameElement} />
                </div>
                <div className="col-4">
                    <input className={Styles.inputTodo} type="date" ref={todoDateElement} />
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button className="btn btn-success kg-button">ADD</button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
