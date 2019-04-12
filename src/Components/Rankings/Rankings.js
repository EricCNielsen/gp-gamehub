import React, { useEffect, useState } from "react";
import MobileContainer from "../Styles/MobileContainer";
import axios from "axios";

const Rankings = () => {
  // useEffect(() => {
  //   getTop5Users();
  // });
  // const [top5Users, setTop5Users] = useState("");

  // const getTop5Users = async () => {
  //   let top5 = await axios.get("/api/top5users");
  //   setTop5Users = top5.data;
  //   console.log(top5.data);
  // };

  return (
    <MobileContainer>
      <h1>Rankings</h1>
      <hr />
      <h2>Top 5 Users</h2>
      <ol>
        <li />
        <li />
        <li />
        <li />
        <li />
      </ol>
    </MobileContainer>
  );
};

export default Rankings;
