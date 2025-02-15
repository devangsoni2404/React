import TodoItem from './TodoItem'
const TodoItems = ({Items}) => {
   return <>
   <div className="items-container">
      {Items.map((item) => (
        <TodoItem todoname = {item.name} tododate = {item.duedate}></TodoItem>
      ))}
    </div>
   </>
}

export default TodoItems;