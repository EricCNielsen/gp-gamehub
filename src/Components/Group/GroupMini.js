import React, { useState, useEffect } from "react"
import MobileContainer from "../Styles/MobileContainer"
import CreateClan from "../CreateClan/CreateClan"
import styled from "styled-components"
import GroupSelector from "./GroupSelector/GroupSelector"

import axios from "axios"

const ClanMiniContainer = styled.div`
  background-color: white;
  margin: 0;
`

const GroupMini = () => {
  const [registeredclans, setRegisteredClans] = useState([])
  const [showSelector, setShowSelector] = useState(false)

  useEffect(() => {
    getRegisteredClans()
  }, [])

  async function getRegisteredClans() {
    try {
      const getRegisteredClans = await axios.get("/api/registeredclans")
      if (getRegisteredClans.data.length > 0) {
        setRegisteredClans(getRegisteredClans.data)
        setShowSelector(true)
      }
    } catch (err) {
      console.log(`there was an error getting your registered clan: ${err}`)
    }
  }
  return (
    <ClanMiniContainer>
      <MobileContainer>
        {showSelector && <GroupSelector clans={registeredclans} />}
        <CreateClan />
      </MobileContainer>
    </ClanMiniContainer>
  )
}

export default GroupMini
