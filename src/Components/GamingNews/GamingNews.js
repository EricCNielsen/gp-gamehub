import React, { useEffect, useState } from 'react';
import MobileContainer from '../Styles/MobileContainer'
import axios from 'axios';



const GamingNews = () => {
    const [articles, setArticles] = useState([])

    useEffect( async () => {
        const {REACT_APP_NEWS_API} = process.env
        const resp = await axios.get("https://api-v3.igdb.com/pulses", {
            headers: {
                "user-key": "09b46fa45f0bccfdab4da8a6d9b31766",
                Accept: "application/json"
             }
         });
         console.log(resp.data)
        setArticles(resp.data)
    }, []);


    return(
        <MobileContainer>
            <ul>
                {/* {data.news.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))} */}
            </ul>
        </MobileContainer>
    )
}

export default GamingNews