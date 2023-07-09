import styles from './../styles/Main.module.css';
import FirstTest from './FirstTest';

const Main = ({testWin, setTestWin, mainTest, setMainTest}) => {
    return (
        <main className={styles.main}>
            <div>
                <p>
                 Цифровая платформа <br/> повышения уровня компетенции в сфере IT. 
                </p>
            </div>
            <FirstTest testWin={testWin} setTestWin={setTestWin} mainTest={mainTest} setMainTest={setMainTest}/>
        </main>
    )
}


export default Main;