import TaskList from '../TaskList'
import TaskInput from '../TaskInput'
import styles from './todolist.module.scss'

export default function TodoList() {
    return (
        <div className={styles.todoList}>
            <div className={styles.todoListContainer}>
                <TaskInput />
                <TaskList />
            </div>
        </div>
    )
}
