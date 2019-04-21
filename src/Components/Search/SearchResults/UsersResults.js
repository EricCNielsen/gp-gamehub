import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const User = styled.div`
  padding: 1%;
  position: relative;
  margin-bottom: 2vh;
  background: rgb(229,229,229);
  height: fit-content;
  border-top: 2px solid black;
  width: 98%
  img {
    border: 1px solid black;
    border-radius: 50%;
    height: 10vh;
    width: 10vh;
    object-fit: cover;
  }
  overflow: auto;
`;
const SearchTitle = styled.div`
  background-color: rgb(229, 229, 229);
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 2vh;
  margin-left: 10vw;
  margin-right: 10vw;
  height: fit-content;
`;

const UserResults = ({ users, openSearch }, props) => {
  const results = users.map((user, i) => {
    return openSearch ? (
      <Link to={`/user/${user.user_id}`} style={{ width: "80vw" }}>
        <User key={i}>
          <div>
            <img src={user.picture} alt="user profile" />
            <h1>{user.ranking}</h1>
            <h1>{user.username}</h1>
            <h2>{user.location}</h2>
            <p>{user.user_id}</p>
          </div>
        </User>
      </Link>
    ) : null;
  });
  return openSearch ? (
    <SearchTitle>
      <h1>Users</h1>
      {results}
    </SearchTitle>
  ) : null;
};

export default UserResults;
