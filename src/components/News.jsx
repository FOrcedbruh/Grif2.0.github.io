import style from './../styles/News.module.css';
import line from './../images/newsLine.svg';
import newImage from './../images/newsImage.svg';
import NewsGrif from './../images/NewsGrif.svg';
import NewsGerb from './../images/NewsGerb.svg';
import { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';



const NewBlock = ({article}) => {

    return (
        <article className={style.newBlock}>
            <div className={style.ArticleText}>
                <p>{article.title}</p>
                <i>{article.created}</i>
            </div>
            <img src={article.image}/>
        </article>
    )
}




const News = ({news, setNews}) => {


    const src = "http://80.78.254.78:8000/news/";
    
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get(src).then(data => {
            setArticles(data.data.results);
        })
    }, []);

    let count = 0;
    return (
        <section className={style.NewsSection}>
            <img src={NewsGerb}/>
            <div className={style.news}>
                <p className={style.text}>НОВОСТИ</p>
                <img src={line}/>
                <div>
                        {articles.map(article => {count++;
                        if (count <= 5)
                            return (
                                <NewBlock article={article}/>
                                )
                        })}
                    
                </div>
                <button className={style.newsBtn} onClick={() => {setNews(true)}}>More news</button>
            </div>
            <img src={NewsGrif}/>
        </section>
    )
}

export default News;