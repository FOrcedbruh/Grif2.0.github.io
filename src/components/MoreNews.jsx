import line from './../images/newsLine.svg';
import style from './../styles/MoreNews.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const src = "http://80.78.254.78:8000/news/";

const NewItem = ({article}) => {
    return (
        <article className={style.new}>
            <p>{article.title}</p>
            <i>{article.created}</i>
        </article>
    )
}




const MoreNews = ({news, setNews}) => {

    let count = 0;

    const [articles, setArticle] = useState([]);


    useEffect(() => {
        axios.get(src).then(data => {
            setArticle(data.data.results)
        })

    }, [])


    return (
        <section className={style.moreNewsWindow}>
            <div className={style.header}>
                <h1>НОВОСТИ</h1>
                <img src={line}/>
            </div>
            <div className={style.news}>
                {articles.map(article => {count++;
                    if (count <= 8) {
                        return (
                            <NewItem article={article}/>
                        )
                    }
                })}
            </div>
            <button className={style.closeBtn} onClick={() => {setNews(false)}}>
                Назад
            </button>
        </section>
    )
}


export default MoreNews;