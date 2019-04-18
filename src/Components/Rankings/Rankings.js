import React, { useEffect, useState } from "react";
import MobileContainer from "../Styles/MobileContainer";
import axios from "axios";
import StarRatings from "react-star-ratings";

const Rankings = props => {
  useEffect(() => {
    getTop5Users();
  }, []);

  const [top5Users, setTop5Users] = useState([]);

  const getTop5Users = async () => {
    let top5 = await axios.get("/api/top5users");
    setTop5Users(top5.data);
  };

  return (
    <MobileContainer>
      <h1>Rankings</h1>
      <hr />
      <h2>Top 5 Users</h2>
      <ol>
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
    </MobileContainer>
  );
};

export default Rankings;
