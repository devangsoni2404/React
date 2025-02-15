import TodoItem from './TodoItem'
import Styles from './TodoItems.module.css'
const TodoItems = ({Items}) => {
   return <>
   <div className= {Styles.itemsContainer}>
      {Items.map((item) => (
        <TodoItem todoname = {item.name} tododate = {item.duedate}></TodoItem>
      ))}
    </div>
   </>
}

export default TodoItems;