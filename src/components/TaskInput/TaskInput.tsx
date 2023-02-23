import styles from './taskinput.module.scss'

export default function TaskInput() {
    return (
        <div>
            <h1 className={styles.title}>To do list TS</h1>
            <form className={styles.form}>
                <input type='text' placeholder='caption go herr' />
                <button type='submit'>➕</button>
            </form>
        </div>
    )
}
