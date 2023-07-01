import { useState, useEffect } from "react";
import style from './../styles/ProtoTest.module.css';
import axios from 'axios';




const Questions = [
    {
        title: "Кто такой инициатор связи?",
        variants: ["Юридическое лицо предоставляющие услугу связи", "Физическое лицо предоставляющие услугу связи", "Лицо через которого осуществляется связь", "Лицо принимающие запрос связи"],
        correct: 2
    },
    {
        title: " Что такое MAC-адрес ?",
        variants: [" Адрес макбука", "Адрес регистрации пользователя", "уникальный идентификатор, присваиваемый каждой единице сетевого оборудования или некоторым их интерфейсам в компьютерных сетях Ethernet", "Адрес сайта"],
        correct: 2
    },
    {
        title: "Что такое IP-адрес?",
        variants: [" Протокол управления передачей данных", "Протокол передачи данных", "Доставка каждого пакета до места назначения", "Уникальный числовой идентификатор устройства в компьютерной сети"],
        correct: 3
    },
    {
        title: " Кто такой провайдер ?",
        variants: ["Компания обеспечивающая доступ к Сети интернет", "Устройство для подключения к Сети интернет", "Потребитель услуг Сети интернет", "Услуга по подключению к Сети интернет"],
        correct: 0
    },
    {
        title: "По каким данным можно найти сделанные фотографии на определенном участке местности ?",
        variants: ["Схеме сжатия", "Геолокация", "Показатель ISO", "Экспозиция"],
        correct: 1
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

const ProtoTest = () => {

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
        console.log(step, index);
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