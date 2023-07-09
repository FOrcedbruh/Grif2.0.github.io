import { useState, useEffect } from "react";
import style from './../styles/ProtoTest.module.css';
import axios from 'axios';
import arrow from './../images/backArrow.svg';



const Questions = [
    {
        title: "Использование сервисов проверки IMEI телефонов позволяет установить информацию: ",
        variants: ["группа крови", "отпечатки пальцев", "биометрию лица", "модель устройства с рядом его технических характеристик"],
        correct: 3
    },
    {
        title: " Парсер – это",
        variants: ["программа, сервис или скрипт, который собирает данные с указанных веб-ресурсов, анализирует их и выдает в нужном формате", "база данных", "веб-ресурс", "криптограмма"],
        correct: 0
    },
    {
        title: "ID – это",
        variants: ["уникальный индивидуальный номер", "время", "место", "событие"],
        correct: 0
    },
    {
        title: "Как выглядит банковский идентификатор номера(БИН):",
        variants: ["5555 55", "AAAA AA", "AA55 A5", "AAAA"],
        correct: 0
    },
    {
        title: "Что такое домен?",
        variants: ["Имя сайта (Символьное имя)", "Вид метаданных"],
        correct: 0
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

const ProtoTest = ({protoTest, setProtoTest}) => {

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
            <button className={style.backBtn} onClick={() => {setProtoTest(false)}}><img src={arrow}/></button>
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

export default ProtoTest;