import React, { useState, useEffect } from "react"
import MobileContainer from "../Styles/MobileContainer"
import CreateClan from "../CreateClan/CreateClan"
import styled from "styled-components"
import GroupSelector from "./GroupSelector/GroupSelector"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"

import axios from "axios"

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
`

const GroupMini = props => {
  const [registeredclans, setRegisteredClans] = useState([])
  const [showSelector, setShowSelector] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    console.log("hit")
    getRegisteredClans()
  }, [props.incrementToUpdateList])

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

  function openCreateClanModal() {
    setOpenModal(true)
  }
  return (
    <ClanMiniContainer>
      {showSelector ? (
        <GroupSelector clans={registeredclans} />
      ) : (
        <>
          <Button
            onClick={openCreateClanModal}
            variant="contained"
            size="small"
            color="primary"
          >
            + Create Clan
          </Button>
          <CreateClan setOpenModal={setOpenModal} open={openModal} />
        </>
      )}
    </ClanMiniContainer>
  )
}

const mapStateToProps = reduxState => {
  return {
    incrementToUpdateList: reduxState.incrementToUpdateList
  }
}

export default connect(mapStateToProps)(GroupMini)
