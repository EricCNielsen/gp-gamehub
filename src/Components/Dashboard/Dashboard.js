import React, { useEffect, useState } from "react";
import GroupMini from "../Group/GroupMini";
import Search from "../Search/Search";
import GamingNews from "../GamingNews/GamingNews";
import Rankings from "../Rankings/Rankings";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  @media screen and (min-width:700px) {
    display: flex;
    flex-direction: row-reverse;
    width: 100vw;
    overflow:hidden;
  }
`
const DashboardPage = styled.div`
  width:100%;
  height: 100%;
  background: white;

`


function Dashboard(props) {
  const [isLoading, setIstLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      getUserInfo()
    }

    fetchData()
  }, []);

  async function getUserInfo() {
    const { updateUser } = props;
    if (!props.username) {
      const user = await axios.get("/auth/account");
      setIstLoading(false)
      updateUser(user.data[0]);
    }
  }

  return (
    <>
    {isLoading ? (
      <div>Loading ...</div>
    ): <DashboardPage>
        <Search />
        <Wrapper>
          <GroupMini />
          <Rankings />
          <GamingNews />
        </Wrapper>
      </DashboardPage>
    }
    </>
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
