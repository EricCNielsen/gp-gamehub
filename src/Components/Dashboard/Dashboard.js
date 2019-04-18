import React, { useEffect } from "react";
import GroupMini from "../Group/GroupMini";
import Search from "../Search/Search";
import GamingNews from "../GamingNews/GamingNews";
import Rankings from "../Rankings/Rankings";
import axios from "axios";

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

  return (
    <div>
      <Search />
      <GroupMini />
      <GamingNews />
      <Rankings />
    </div>
  );
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
