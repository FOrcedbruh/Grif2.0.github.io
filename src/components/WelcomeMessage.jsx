import style from './../styles/WelcomeMessage.module.css';
import { useState, useEffect } from 'react';



const WelcomeMessage = ({message, setMessage}) => {

    const [percentage, setPercantage] = useState(0);



    const progressChange = () => {
        setInterval(() => {setPercantage(percentage + 5)}, '500');
    }

    useEffect(() => {
        progressChange();
    })

    
    
    

    return (
        <section className={style.message} >
            <p>Добро пожаловать!</p>
            <div className={style.progress} style={{width: `${percentage}%`}}>

            </div>
        </section>
    )
}


export default WelcomeMessage;