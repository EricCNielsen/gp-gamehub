import React, { useEffect, useState } from 'react';
import MobileContainer from '../Styles/MobileContainer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const HeightContainer = styled.div`
    height: 40vh;
    overflow: auto;
    margin-left: 25vw;
    margin-right: 25vw;
    padding: 1%;
`

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

const GamingNews = (props) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getNews();
    }, []);

    
    const getNews = async () => {
        const {REACT_APP_NEWS_API} = process.env
        const targetUrl = "https://newsapi.org/v2/everything?q=gaming&apiKey="
        const res = await axios.get(targetUrl + REACT_APP_NEWS_API);
        setArticles(res.data.articles)
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
        console.log(article.url)
        return (
            <Card className={props.card} key={i} style={{marginBottom:'.5%', marginTop:'.2%'}}>
                <a href={article.url} target="_blank">
                    <CardActionArea>
                    <CardContent>
                        <img src={article.urlToImage} alt="Article Image" style={{objectFit:"cover", width:'80%', height: '80%'}}/>
                        <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                        </Typography>
                        <Typography component="p">
                        {article.description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </a>
            </Card>
        )
    })


    return(
        <MobileContainer>
            <HeightContainer>
                {newsArticles}
            </HeightContainer>
        </MobileContainer>
    )
}

GamingNews.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(GamingNews)