import { useState, useEffect } from "react";
import style from './../styles/ProtoTest.module.css';
import axios from 'axios';
import arrow from './../images/backArrow.svg';



const Questions = [
    {
        title: "Какая из перечисленных технологий обеспечивает многофакторную аутентификацию?",
        variants: ["Биометрический сканер", "Парольная фраза", "Одноразовый пароль по SMS", "Ключевая карта"],
        correct: 3
    },
    {
        title: "Что представляет собой брандмауэр (firewall)?",
        variants: ["Программное обеспечение, контролирующее сетевой трафик", "Физическое устройство, защищающее серверы от хакерских атак", "Кабельная система, обеспечивающая безопасную передачу данных", "Метод шифрования информации для защиты от несанкционированного доступа"],
        correct: 0
    },
    {
        title: "Что такое VPN (виртуальная частная сеть)?",
        variants: ["Метод шифрования данных для защиты конфиденциальности", " Физическое устройство, обеспечивающее защиту от вредоносных программ", "Протокол для подключения к беспроводным сетям", "Платформа для облачного хранения данных"],
        correct: 0
    },
    {
        title: "Что такое антивирусное программное обеспечение?",
        variants: ["Устройство для резервного копирования данных", "Система контроля доступа в сеть", "Программа, предотвращающая и обнаруживающая вирусы", "Метод шифрования информации для безопасного хранения"],
        correct: 2
    },
    {
        title: "Что представляет собой система детекции вторжений (IDS)?",
        variants: ["Физическое устройство для контроля доступа в помещение", "Программное обеспечение для защиты от вирусов", "Метод шифрования данных для безопасной передачи", "Система, обнаруживающая аномальную активность в компьютерной сети"],
        correct: 3
    }
];

const Result = ({correct}) => {
    return (
        <div className={style.testWindow}>
            <div className={style.result}>
                <h1>Правильных ответов {correct}  из  {Questions.length}</h1>
            </div>
        </div>
    )
}


//const src = 'http://80.78.254.78:8000/task/list/1/';

const MainTest = ({mainTest, setMainTest}) => {

 /*   const [variants, setVariants] = useState([]);


    useEffect(() => {
        axios.get(src).then(data => {
            console.log(data.data.results);
            setVariants(data.data.results)
        })
    }, []);
*/

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = Questions[step];
    const onClickVariant = (index) => {
        setStep(step + 1);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }
    if (step > Questions.length - 1) {
        return (
            <Result correct={correct}/>
        )
    }
    const percentage = Math.round(step / Questions.length * 100);
    return (
        <section className={style.testWindow}>
            <button className={style.backBtn} onClick={() => {setMainTest(false)}}><img src={arrow}/></button>
            <div className={style.test}>
                <div className={style.progress} style={{width: `${percentage}%`}}></div>
                <h1>{question.title}</h1>
                <ul>
                    {question.variants.map((text, index) => (<li key={index} onClick={() => onClickVariant(index)}>{text}</li>))}
                </ul>
            </div>
        </section>
    )
}

export default MainTest;