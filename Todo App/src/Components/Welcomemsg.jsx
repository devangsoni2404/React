import styles from './Welcomemsg.module.css'
import { useContext } from 'react'
import { TodoItemContext } from '../Store/todoitem-context-api'
const Welcomemsg = () => {
    const {todoItems} = useContext(TodoItemContext);
    return todoItems.length===0 && <h2 className = {styles.message} >Enjoy Your Day</h2>
}

export default Welcomemsg;