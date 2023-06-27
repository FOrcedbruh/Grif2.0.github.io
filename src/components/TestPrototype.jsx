import { useState, useEffect } from "react";
import style from './../styles/ProtoTest.module.css';
import axios from 'axios';

const Questions = [
    {
        title: "Самый популярный язык программирования  ? ",
        variants: ["JavaScript", "GO", "C++", "Python"],
        correct: 3
    },
    {
        title: " Основной ГОСТ по защите информации  ? ",
        variants: ["50577-2018", "50922-2006", "50462-2009", "53114-2008"],
        correct: 1
    },
    {
        title: "React - это...",
        variants: ["библиотека", "фреймворк", "плагин", "ключевое слово"],
        correct: 0
    },
    {
        title: "Основная библиотека JS ? ",
        variants: ["VueJS", "Lume", "React", "Phython"],
        correct: 2
    },
    {
        title: "На каких уровнях модели OSI работает межсетевой экран ? ",
        variants: ["сетевой/транспортный", "физический/сетевой", "транспортный/канальный", "канальный/прикладной "],
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


const src = 'http://80.78.254.78:8000/task/list/1/';

const ProtoTest = () => {

    const [variants, setVariants] = useState([]);


    useEffect(() => {
        axios.get(src).then(data => {
            console.log(data.data.results);
            setVariants(data.data.results)
        })
    }, []);


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
    console.log(percentage);
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