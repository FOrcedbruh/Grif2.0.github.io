import styles from './../styles/Main.module.css';
import defappIcon from './../images/defapp-icon.svg';
import testengIcon from './../images/testeng-icon.svg';



const FirstTest = () => {
    return (
        <section className={styles.testBlock}>
            <p className={styles.text}><span>Пройдите свой первый тест</span> <br/>на нашей площадке </p>
            <section className={styles.testBtnBlock}>
                <button>Инженер по тестированию <img src={testengIcon}/></button>
                <button>Основы программно-аппаратной защиты информации <img src={defappIcon}/></button>
            </section>
        </section>
    )
}

export default FirstTest;