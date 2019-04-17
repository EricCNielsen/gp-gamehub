import React, { useState, useEffect } from "react"
import MobileContainer from "../Styles/MobileContainer"
import { Link } from "react-router-dom"
import CreateClan from "../CreateClan/CreateClan"
import styled from "styled-components"

import axios from "axios"

const ClanMiniContainer = styled.div`
  background-color: white;
  margin: 0;
`

const GroupMini = () => {
  useEffect(() => {
    getRegisteredClans()
  })

  async function getRegisteredClans() {
    try {
      const getRegisteredClans = await axios.get("/api/registeredclans")
      console.log(getRegisteredClans.data)
    } catch (err) {
      console.log(`there was an error getting your registered clan: ${err}`)
    }
  }
  return (
    <ClanMiniContainer>
      <MobileContainer>
        <h3>Top Bar?</h3>
        <h1>Group</h1>
        <CreateClan />
        <Link to="/group/post">create a post</Link>
      </MobileContainer>
    </ClanMiniContainer>
  )
}

export default GroupMini
