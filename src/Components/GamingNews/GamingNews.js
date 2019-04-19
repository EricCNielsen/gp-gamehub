import React, { useEffect, useState } from 'react';
import MobileContainer from '../Styles/MobileContainer'
import { Link } from 'react-router-dom'
import axios from 'axios';



const GamingNews = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getNews();
        // pulses();
    }, []);

    
    const getNews = async () => {
        const {REACT_APP_NEWS_API} = process.env
        const targetUrl = "https://newsapi.org/v2/everything?q=gaming&apiKey="
        const res = await axios.get(targetUrl + REACT_APP_NEWS_API);
        console.log(res.data)
        setArticles(res.data)
      };


    // const pulses = async () => {
    //     const {REACT_APP_IGDB_API} = process.env
    //     const targetUrl = "https://api-v3.igdb.com/pulses/?fields=*"
    //     const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    //     const res = await axios.get(proxyUrl + targetUrl, { 
    //         headers: {
    //             "user-key": REACT_APP_IGDB_API,
    //             Accept: "application/json",
    //         },
    //     })
    //     console.log(res)
    //     setArticles(res.data)
    // }

      console.log("articles", articles)

    const newsArticles = articles.map((article, i) => {
        return (
            <div key={i}>
                <h1>{article.name}</h1>
            </div>
        )
    })

    return(
        
        <div>
            {newsArticles}
        </div>
        
    )
}

export default GamingNews