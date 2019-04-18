import React, { useEffect, useState } from 'react';
import MobileContainer from '../Styles/MobileContainer'
import axios from 'axios';



const GamingNews = () => {
    const [articles, setArticles] = useState([])

    useEffect( async () => {
        const {REACT_APP_NEWS_API} = process.env
        const resp = await axios.post("https://api-v3.igdb.com/pulse_groups", {
            headers: {
                "user-key": "09b46fa45f0bccfdab4da8a6d9b31766",
                'Accept': "application/json",
                withCredentials: true,
             },
             data: "fields created_at,game,name,published_at,pulses,tags,updated_at;"
         });
         console.log(resp.data)
        setArticles(resp.data)
    }, []);


    // axios({
    //     url: "https://api-v3.igdb.com/pulse_groups",
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'user-key': API_KEY
    //     },
    //     data: "fields created_at,game,name,published_at,pulses,tags,updated_at;"
    //   })
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

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