import styles from './../styles/Main.module.css';
import FirstTest from './FirstTest';


const Main = () => {
    return (
        <main className={styles.main}>
            <div>
                <p>
                <span>ГРИФ.</span> первый полностью  бесплатный ресурс повышения уровня знаний в сфере IT. 
                </p>
            </div>
            <FirstTest />
        </main>
    )
}
export default Main;