import React, { useState } from "react"
import MobileContainer from "../Styles/MobileContainer"
import { Link } from "react-router-dom"
import CreateClan from "../CreateClan/CreateClan"
import styled from "styled-components"

const ClanMiniContainer = styled.div`
  background-color: white;
  margin: 0;
`

const GroupMini = () => {
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
