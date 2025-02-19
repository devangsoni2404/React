import { TodoItemContext } from '../Store/todoitem-context-api'
import { useContext } from 'react'

const TodoItem = ({todoname, tododate}) => {
 
        const {deleteItems} = useContext(TodoItemContext);

    return <div className="container kg-row">
        <div className="row">
            <div className="col-4">
                {todoname}
            </div>
            <div className="col-4">
                {tododate}
            </div>
            <div className="col-2">  <button type="button" className="btn btn-danger kg-button" onClick={() => deleteItems(todoname)}>DELETE</button>
            </div>
        </div>
    </div>
}

export default TodoItem;