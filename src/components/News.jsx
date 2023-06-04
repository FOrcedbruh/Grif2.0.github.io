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
                <p>{article.company.name}</p>
                <i>5 мая 2023 г.</i>
            </div>
            <img src={newImage}/>
        </article>
    )
}




const News = () => {
    


    const src = "https://jsonplaceholder.typicode.com/users";
    
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get(src).then(data => {
            setArticles(data.data);
        })
    }, []);


    return (
        <section className={style.NewsSection}>
            <img src={NewsGerb}/>
            <div className={style.news}>
                <p className={style.text}>НОВОСТИ</p>
                <img src={line}/>
                <div>
                    
                        {articles.map(article => {
                        return (
                            <NewBlock article={article}/>
                            )
                        })}
                    
                </div>
            </div>
            <img src={NewsGrif}/>
        </section>
    )
}

export default News;