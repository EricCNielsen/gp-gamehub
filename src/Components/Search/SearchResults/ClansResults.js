import React from 'react';
import styled from 'styled-components';

const Clan = styled.div`
    background-color: rgba(229,229,229, .9) ;
    border: 2px solid black;
    border-radius: 10px;
    margin-top: 2vh;
    margin-left: 10vw;
    margin-right: 10vw;
    height: fit-content;
    img {
        border: 1px solid black;
        border-radius: 50%;
        height:10vh;
        width:10vh;
        object-fit: cover
    }
    overflow: auto;
    `

const ClansResults = ({clans, openSearch}) => {
    const results = clans
    .map((clan, i) => {
        return(
            openSearch ? <Clan key ={i}>
                <h3>Clans</h3>
                <hr/>
                <img src={clan.avatar} alt="clan picture"/>
                <h1>{clan.name}</h1>
                <h3>{clan.ranking}</h3>
            </Clan> :null
        )
    })
    return(
        <div>
            {results}
        </div>
    )
}

export default ClansResults