import React, { useEffect, useState } from "react";
import MobileContainer from "../Styles/MobileContainer";
import axios from "axios";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

const RankingContainer = styled.div`
  height: 40vh;
  overflow: auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 10px;
  margin-bottom: 5%;
  height: fit-content;
  background: white;
  box-shadow: 0 15px 30px 0 #2c3539, 0 5px 15px 0 #2c3539;
  h1 {
    font-size: 40px;
    font-weight: bold;
  };
  @media screen and (min-width: 700px) {
    margin-right: 1%;
    width: 20vw;
    position: absolute;
    top: 25%;
    right: 0.1%;
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
`;

const Rankings = props => {
  const [top5Users, setTop5Users] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      getTop5Users();
    }
    fetchData()
  }, []);


  const getTop5Users = async () => {
    let top5 = await axios.get("/api/top5users");
    setTop5Users(top5.data);
    setIsLoading(false)
  };

  return (
    <RankingContainer>
      {isLoading ? (
        <div>Finding the best of the best...</div>
      ) : (
      <div>
        <h1>Rankings</h1>
        <hr />
        <h2>Top 5 Users</h2>
        <ol style={{paddingLeft:"5%", paddingBottom:"2%"}}>
          {top5Users.map(user => {
            return (
              <li key={user.username} style={{ textAlign: "left" }}>
                {user.username} :
                <div>
                  <StarRatings
                    rating={+user.a_r}
                    starDimension="20px"
                    starSpacing="10px"
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      )}
    </RankingContainer>  
  );
};

export default Rankings;
