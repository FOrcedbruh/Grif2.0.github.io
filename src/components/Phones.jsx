import style from './../styles/Phones.module.css';
import SecondPhone from './../images/SecondPhone.svg';
import ThirdPhone from './../images/ThirdPhone.svg';
import FourthPhone from './../images/FourthPhone.svg';;

const Phones = () => {
    return (
        <section className={style.Phones}>
            <p className={style.txt}><span className={style.mobile}>Мобильная</span> <span className={style.version}>версия</span> </p>
            <div className={style.PhonesWindow}>
                <div><img src={SecondPhone}/></div>
                <div><img src={ThirdPhone}/></div>
                <div><img src={FourthPhone}/></div>
            </div>
        </section>
        
    )
}



export default Phones;