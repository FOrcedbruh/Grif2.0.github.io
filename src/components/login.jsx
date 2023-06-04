import {useState} from 'react';
import style from './../styles/login.module.css';




export const Log = ({toggle, setToggle, log, setLog}) => {
    return (
        <div className={`${style.login} ${log ? `${style.nonViewLog}` : ""}`}>
                <form method="post" id="log" className={style.formLog}>
                    <div className={style.entDiv}>
                        <label htmlFor="name" className={style.label}>Name</label>
                        <input type="text" name="name" placeholder="Your full name" className={style.input}/>
                    </div>
                    <div className={style.entDiv}>
                        <label htmlFor="email" className={style.label}>Email</label>
                        <input type="email" name="email" placeholder="Your email address" className={style.input}/>
                    </div>
                    <div className={style.entDiv}>
                        <label htmlFor="password" className={style.label}>Password</label>
                        <input type="password" name="password" placeholder="Your password" className={style.input}/>
                    </div>
                    <section className={style.toggleBtn}>
                        <div className={`${style.toggleAura} ${!toggle ? `${style.activeToggleAura}` : ""}`}  onClick={() => {setToggle(!toggle)}}>
                            <div className={`${style.toggle} ${!toggle ? `${style.activeToggle}` : ""}`}></div>
                        </div>
                        <p className={style.toggleText}>Remember me </p>
                    </section>
                    <button form="log" className={style.Btn}>SIGN UP</button>
                    <p className={style.endText}>Already have an account?<span onClick={() => {setLog(true)}}>Log in</span></p>
                </form>
            </div>
    )
}

export const  Sign = ({toggle, setToggle, log, setLog}) => {
    
    return (
        <div className={`${style.signup} ${log ? `${style.activeLog}` : ""}`}>
                <form method="post" id="log" className={style.formLog}>
                    <div className={style.entDiv}>
                        <label htmlFor="email" className={style.label}>Email</label>
                        <input type="email" name="email" placeholder="Your email address" className={style.input}/>
                    </div>
                    <div className={style.entDiv}>
                        <label htmlFor="password" className={style.label}>Password</label>
                        <input type="password" name="password" placeholder="Your password" className={style.input}/>
                    </div>
                    <section className={style.toggleBtn}>
                        <div className={`${style.toggleAura} ${!toggle ? `${style.activeToggleAura}` : ""}`}  onClick={() => {setToggle(!toggle)}}>
                            <div className={`${style.toggle} ${!toggle ? `${style.activeToggle}` : ""}`}></div>
                        </div>
                        <p className={style.toggleText}>Remember me </p>
                    </section>
                    <button form="log" className={style.Btn}>LOG IN</button>
                    <p className={style.endText}>Don`t have an account?<span onClick={() => {setLog(false)}}>Sign up</span></p>
                </form>
            </div>
    )
}

const Login = () => {

    const [toggle, setToggle] = useState(false);
    const [log, setLog] = useState(false);

    
    return (
        <div className={style.logSignWindow}>
            <Log toggle={toggle} setToggle={setToggle} log={log} setLog={setLog} />
            <Sign toggle={toggle} setToggle={setToggle} log={log} setLog={setLog} />
        </div>
    )
}
 export default Login;