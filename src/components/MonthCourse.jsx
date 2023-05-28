import style from './../styles/MonthCourse.module.css';
import DataAnalys from './../images/DataAnalys.svg';

const MonthCourse  = () => {
    return (
        <div className={style.MonthCourseWindow}>
            <section className={style.text}>
                <h1><span>КУРС</span> месяца</h1>
                <p>По нашей статисктике,за май 2023 года самый частороходимый курс
<span> - Аналитик Данных*</span></p></section>
            <section className={style.btnWindow}>
                <div className={style.Btn}>
                    <p>
                        Аналитик данных
                    </p>
                    <img src={DataAnalys}/>
                </div>
            </section>
        </div>
    )
}



export default MonthCourse;