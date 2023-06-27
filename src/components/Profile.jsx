import style from './../styles/Profile.module.css';
import Ava from './../images/Ava.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Line from './../images/profNewsLine.svg';
import close from './../images/closeTests.svg';



const Profile = ({profile, setProfile}) => {

    const [articles, setArticles] = useState([])
    const src = "http://80.78.254.78:8000/news/";

    useEffect(() => {
        axios.get(src).then(data => {
            setArticles(data.data.results);
        })
    }, [])
    let count = 0;

    return (
        <section className={style.ProfileWindow}>
            <button className={style.closeBtn}><img src={close} onClick={() => {setProfile(false)}}/></button>
            <div className={style.topBlock}>
                <div className={style.mainDiv}>
                    <div className={style.avaWindow}>
                        <img src={Ava}/>
                    </div>
                    <p className={style.nickname}>Некий Роман Гослингович <br /><br /> <span>  должность: <br /> Заместитель начальника ЭКЦ МВД России  <br />Полковник Полиции </span></p>
                </div>
                <div className={style.news}>
                    <h1>НОВОСТИ</h1>
                    <img src={Line}/>
                    <article>
                        {articles.map(article => {
                            count++; 
                            if (count <= 3) {
                                return (
                                    <div className={style.new}>
                                        <p>
                                            {article.title}
                                        </p>
                                    </div>
                                )
                            }
                        })}
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Profile;