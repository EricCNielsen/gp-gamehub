import React, { useEffect } from "react";
import GroupMini from "../Group/GroupMini";
import Search from "../Search/Search";
import GamingNews from "../GamingNews/GamingNews";
import Rankings from "../Rankings/Rankings";
import axios from "axios";
import styled from "styled-components";

import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";

function Dashboard(props) {
  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const { updateUser } = props;
    if (!props.username) {
      const user = await axios.get("/auth/account");
      updateUser(user.data[0]);
    }
  }

  const Responsive = styled.div`
    @media only screen and (max-width: 400px) {
      
    }
  `;

if (Responsive) {
return (
<div>
      <Responsive>
        <Search />
        <GroupMini />
        <GamingNews />
        <Rankings />
      </Responsive>
    </div>
)
} else {
  return (
    <div>
      <Responsive>
        <Search />
        <GroupMini />
        <GamingNews />
        <Rankings />
      </Responsive>
    </div>
  );

}
}

// const mapSateToProps = reduxState => {
//   const { username } = reduxState;
//   return {
//     username
//   };
// };

const mapDispatchToProps = {
  updateUser
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
