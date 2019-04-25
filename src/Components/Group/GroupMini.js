import React, { useState, useEffect } from "react";
import MobileContainer from "../Styles/MobileContainer";
import CreateClan from "../CreateClan/CreateClan";
import styled from "styled-components";
import GroupSelector from "./GroupSelector/GroupSelector";

import axios from "axios";

const ClanMiniContainer = styled.div`
  background-color: white;
  margin: 0;
  border-bottom: 1px solid black;
  overflow: auto;
  height: 80vh;
  box-shadow: 0 15px 30px 0 #2c3539, 0 5px 15px 0 #2c3539;
  @media screen and (min-width: 700px) {
    margin: 0 auto;
    width: 54vw;
    position: absolute;
    top: 15%;
    left: 23.65%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    max-height: 98vh;
    min-height: 80vh;
  }
`;

const GroupMini = () => {
  const [registeredclans, setRegisteredClans] = useState([])
  const [showSelector, setShowSelector] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    let fetchData = async () => {
      getRegisteredClans()
    }
    fetchData()
  }, [])

  async function getRegisteredClans() {
    try {
      const getRegisteredClans = await axios.get("/api/registeredclans");
      if (getRegisteredClans.data.length > 0) {
        setRegisteredClans(getRegisteredClans.data)
        setShowSelector(true)
        setIsLoading(false)
      }
    } catch (err) {
      console.log(`there was an error getting your registered clan: ${err}`);
    }
  }
  return (
    <>
    <ClanMiniContainer>
      {isLoading ? (
        <div>Peeking at your groups...</div>
      ):showSelector ? (
        <GroupSelector clans={registeredclans} />
      ) : (
        <CreateClan />
      )}
    </ClanMiniContainer>

  </>
  )
}

export default GroupMini;
