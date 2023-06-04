import Header from './Header.jsx';
import Login from './login.jsx'
import style from './../styles/Reg.module.css';
import {Log} from './login.jsx';
import {Sign} from './login.jsx';
import {useState} from 'react';





const Registration = () => {
    const [toggle, setToggle] = useState(false);
    const [log, setLog] = useState(false);
    
    return (
        <div className={style.reg}>
            <Log  toggle={toggle} setToggle={setToggle} log={log} setLog={setLog}/>
            <Sign  toggle={toggle} setLog={setLog} setToggle={setToggle} log={log}/>
        </div>
    )
}

export default Registration;