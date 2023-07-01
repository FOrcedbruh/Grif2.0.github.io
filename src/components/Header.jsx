import style from './../styles/Header.module.css';
import logoGerb from '../images/logo-gerb.svg';
import logoGrif from '../images/logo-grif.svg';
import logoLine from '../images/logo-line.svg';
import search from '../images/search.svg';
import { useEffect, useState } from 'react';
import { CSSTransition } from  'react-transition-group';
import Registration from "./Registration";




const Header = ({activeReg, lock, setLock,  blockWrap, setBlockWrap, profile, setProfile, news, setNews, testWin, setTestWin, courses, setCourses}) => {
    



    const [account, setAccount] = useState(false);
    const [activeHead, setActiveHead] = useState(false);
    return (
        <header className={`${style.header} ${activeHead ? `${style.activeHead}` : ""}`}>
            <nav>
                <section className={style.logo}>
                    <img src={logoGerb}/>
                    <img src={logoLine}/>
                    <img src={logoGrif}/>
                </section>
                <ul className={style.ul} onMouseEnter={() => {if (lock) {setLock(false)}}} onClick={() => {if (testWin) {setTestWin(false)}}}>
                    <li><a href="#" onMouseOver={() => {setAccount(true); setActiveHead(true)}} onClick={() => {setAccount(false); setActiveHead(false)}}>Аккаунт</a></li>
                    <li><a href="#" onClick={() => {setProfile(!profile)}}>Профиль</a></li>
                    <li><a href="#" onClick={() => {setTestWin(true)}}>Тесты</a></li>
                    <li><a href="#" onClick={() => {setCourses(!courses)}}> Курсы</a></li>
                    <li><a href="#" onClick={() => {setLock(!lock)}}>Экзамен</a></li>
                    <li><a href="#" onClick={() => {setLock(!lock)}}>Абитуриентам</a></li>
                    <li><a href="#" onClick={() => {setNews(true)}}>Новости</a></li>
                    <li><a href="#" onClick={() => {setLock(!lock)}}>Настройки </a></li>
                    <li><a href="#" onClick={() => {setLock(!lock)}}>Поддержка</a></li>
                </ul>
                <section className="search">
                    <img src={search}/>
                </section>
            </nav>
            <CSSTransition classNames="alert" timeout={500} in={account} unmountOnExit>
            <div className={style.accountModal}>
                <p>Быстрые действия</p>
                <ul>
                    <li><a href="#"><span className={style.autorize}>Авторизация</span></a></li>
                    <li><a href="#" onClick={() => {activeReg(); setAccount(false); setActiveHead(false)}}>Создать новый аккаунт</a></li>
                    <li><a href="#">Удалить аккаунт</a></li>
                    <li><a href="#">Настройки аккаунта</a></li>
                    <li><a href="#" onClick={() => {setLock(!lock); setAccount(false); setActiveHead(false)}}>Написать в поддержку</a></li>
                </ul>
            </div>
            </CSSTransition>
            <div className={`${style.blur} ${activeHead ? `${style.activeBlur}` : ""}`} onClick={() => {setActiveHead(false); setAccount(false)}}></div>
            
        </header>
    )
};



export default Header;