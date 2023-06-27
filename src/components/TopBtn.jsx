import {useState, useEffect} from 'react';
import styles from './../styles/TopBtn.module.css';



const TopBtn = () => {

    const [view, setView] = useState(false);


    const hiddenTopBtn = () => {
        if (window.scrollY > 1200) {
            setView(true);
        }
        if (window.scrollY === 0) {
            setView(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hiddenTopBtn);

        return() => {
            window.removeEventListener('scroll', hiddenTopBtn);
        }

    }, [])


    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button onClick={() => {scrollTop(); setView(false)}} className={`${styles.button} ${!view ? `${styles.buttonView}` : ""}`}>Прокрутить наверх</button>
    )
}

export default TopBtn;