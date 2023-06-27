import style from './../styles/Tests.module.css';
import grif from './../images/testsWinGrif.png';
import ProtoTest from './TestPrototype.jsx';
import { useState, useEffect } from 'react';
import close from './../images/closeTests.svg';
import axios from 'axios';


const Tests = ({testWin, setTestWin}) => {


    // получение категорий

    const src = 'http://80.78.254.78:8000/task/category/';

    const[categories, setCategory] = useState([]);

    useEffect(() => {
        axios.get(src).then((data) => {
            setCategory(data.data.results);
        })
    }, [])

    // рендер первого теста
    const [protoTest, setProtoTest] = useState(false);

    return (
        <section className={style.TestsWindow}>
            <button className={style.closeBtn} onClick={() => {setTestWin(false)}}><img src={close}/></button>
            
            <div className={style.testBlock}>
                <h1>Тесты</h1>
                <div className={style.testLevels}>
                    {categories.map(category => {
                        return(
                            <section onClick={() => {setProtoTest(true)}}><p>{category.name}</p></section>
                        )
                    })}
                </div>
            </div>
            <div className={style.decorate}>
                <img src={grif}/>
            </div>
            {protoTest && <ProtoTest />}
        </section>
    )
}

export default Tests;