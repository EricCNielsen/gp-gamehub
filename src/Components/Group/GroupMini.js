import React, { useState } from "react";
import MobileContainer from "../Styles/MobileContainer";
import { Link } from "react-router-dom";

const GroupMini = () => {
  return (
    <div>
      <MobileContainer>
        <h3>Top Bar</h3>
        <h1>Group</h1>
        <Link to="/group/post">create a post</Link>
      </MobileContainer>
    </div>
  );
};

export default GroupMini;
