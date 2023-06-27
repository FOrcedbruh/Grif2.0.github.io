import styles from './../styles/Main.module.css';
import defappIcon from './../images/defapp-icon.svg';
import testengIcon from './../images/testeng-icon.svg';



const FirstTest = ({testWin, setTestWin}) => {
    return (
        <section className={styles.testBlock}>
            <p className={styles.text}><span>Входной контроль </span></p>
            <section className={styles.testBtnBlock}>
                <button onClick={() => {setTestWin(true)}}><img src={testengIcon}/> Инженер <br/>по тестированию </button>
                <button><img src={defappIcon}/> <p> <br /> Программно-аппаратная <br /> защита информации</p>  </button>
            </section>
        </section>
    )
}

export default FirstTest;