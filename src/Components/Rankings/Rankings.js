import React, { useEffect, useState } from "react";
import MobileContainer from "../Styles/MobileContainer";
import axios from "axios";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

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
              {user.username} :{" "}
              <div>
                <Rating
                  {...props}
                  initialRating={+user.a_r}
                  emptySymbol={faStarRegular}
                  fullSymbol={faStarSolid}
                  fractions={2}
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
