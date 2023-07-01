import grif from './../images/testsWinGrif.png';
import { useState, useEffect } from 'react';
import style from './../styles/Courses.module.css';
import close from './../images/closeTests.svg';




const Courses = ({courses, setCourses}) => {



    return (
        <section className={style.coursesWindow}>
            <section className={style.courses}>
                <header className={style.header}><h1>КУРСЫ</h1><button className={style.closeBtn} onClick={() => {setCourses(false)}}><img src={close}/></button></header>
                <article className={style.courseLevels}>
                    <h2>Средства вычислительной техники </h2>
                    <div className={style.levelsBlock}>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.easy}>ЛЕГКИЙ</span></p>
                        </div>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.pro}>ПРОДВИНУТЫЙ</span></p>
                        </div>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.profile}>ПРОФИЛЬНЫЙ</span></p>
                        </div>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.special}>СПЕЦИАЛИТЕТ</span></p>
                        </div>
                    </div>
                </article>
                <article className={style.courseLevels}>                                        
                    <h2>Основы программирования </h2>
                    <div className={style.levelsBlock}>
                        <div className={style.levelsBlock}>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.easy}>ЛЕГКИЙ</span></p>
                        </div>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.pro}>ПРОДВИНУТЫЙ</span></p>
                        </div>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.profile}>ПРОФИЛЬНЫЙ</span></p>
                        </div>
                        <div className={style.level}>
                            <p>УРОВЕНЬ: <span id={style.special}>СПЕЦИАЛИТЕТ</span></p>
                        </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className={style.image}>
                <img src={grif}/>
            </section>
        </section>
    )
}

export default Courses;