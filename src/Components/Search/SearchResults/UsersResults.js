import React from 'react';
import styled from 'styled-components';


const User = styled.div`
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


const UserResults = ({users, openSearch}) => {
     const results = users
     .map((user, i) => {
        return(
            // <Link to="/user/:${id}">
               openSearch ? <User key={i}>
                    <img src={user.picture} alt="profile picture"/>
                    <h1>{user.ranking}</h1>
                    <h1>{user.username}</h1>
                    <h2>{user.location}</h2>
                </User> : null
            // </Link>
        )
    })
    return (
        <div>
            {results}
        </div>
    )
}

export default UserResults