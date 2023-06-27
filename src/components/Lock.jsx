import LockImg from './../images/Lock.svg';
import style from './../styles/Lock.module.css';


const Lock = ({lock, setLock}) => {
    return (
        <section className={style.LockWindow} onClick={() => {setLock(false)}}>
            <div className={style.lock}>
                <img src={LockImg} alt='Coming soon...'/>
                <p>Будет открыто позднее...</p>
            </div>
        </section>
    )
}

export default Lock;