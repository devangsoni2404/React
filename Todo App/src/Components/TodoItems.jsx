import TodoItem from './TodoItem'
import Styles from './TodoItems.module.css'
const TodoItems = ({Items , onDeleteItem}) => {
   return <>
   <div className= {Styles.itemsContainer}>
      {Items.map((item) => (
        <TodoItem key= {item.name} todoname = {item.name} tododate = {item.duedate} onDeleteItem={onDeleteItem} ></TodoItem>
      ))}
    </div>
   </>
}

export default TodoItems;