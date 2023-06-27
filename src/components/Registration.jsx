import Header from './Header.jsx';
import Login from './login.jsx'
import style from './../styles/Reg.module.css';
import close from './../images/closeTests.svg';
import {Log} from './login.jsx';
import {Sign} from './login.jsx';
import {useState} from 'react';





const Registration = ({reg, setReg}) => {
    const [toggle, setToggle] = useState(false);
    const [log, setLog] = useState(false);
    
    return (
        <div className={style.reg}>
            <button className={style.closeBtn}><img src={close} onClick={() => {setReg(false)}}/></button>
            <Log  toggle={toggle} setToggle={setToggle} log={log} setLog={setLog}/>
            <Sign  toggle={toggle} setLog={setLog} setToggle={setToggle} log={log}/>
        </div>
    )
}

export default Registration;