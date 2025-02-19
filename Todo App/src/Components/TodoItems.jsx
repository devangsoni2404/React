import { useContext } from 'react'
import TodoItem from './TodoItem'
import Styles from './TodoItems.module.css'
import { TodoItemContext } from '../Store/todoitem-context-api'
const TodoItems = () => {

  const { todoItems } = useContext(TodoItemContext);

  return <>
    <div className={Styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoname={item.name} tododate={item.duedate} ></TodoItem>
      ))}
    </div>
  </>
}

export default TodoItems;