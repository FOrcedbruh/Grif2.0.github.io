import style from './../styles/Header.module.css';
import logoGerb from '../images/logo-gerb.svg';
import logoGrif from '../images/logo-grif.svg';
import logoLine from '../images/logo-line.svg';
import search from '../images/search.svg';



const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <section className={style.logo}>
                    <img src={logoGerb}/>
                    <img src={logoLine}/>
                    <img src={logoGrif}/>
                </section>
                <ul className={style.ul}>
                    <li><a href="#">Аккаунт</a></li>
                    <li><a href="#">Профиль</a></li>
                    <li><a href="#">Тесты</a></li>
                    <li><a href="#">Кейсы</a></li>
                    <li><a href="#">Экзамен</a></li>
                    <li><a href="#">Абитуриентам</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Настройки </a></li>
                    <li><a href="#">Поддержка</a></li>
                </ul>
                <section className="search">
                    <img src={search}/>
                </section>
            </nav>
        </header>
    )
};

export default Header;