import React, { useState, useEffect } from "react"
import MobileContainer from "../Styles/MobileContainer"
import CreateClan from "../CreateClan/CreateClan"
import styled from "styled-components"
import axios from "axios"
import { connect } from "react-redux"
import { updateClan } from "./../../ducks/reducer"

const ClanMiniContainer = styled.div`
  background-color: white;
  margin: 0;
`

const InGroupMini = ({clan_id}) => {
  const [group, setGroup] = useState()
  console.log(clan_id)

  useEffect(() => {
    getGroup()
  }, [])

  const getGroup =  async () => {
    const id = clan_id
    const res = await axios.get(`/api/clan/${id}`)
    console.log(res.data)
    setGroup(res.data)
  }


  console.log(group)
  return (
    <div>
      <h1>InGroupMini</h1>
    </div>
  )
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id,
    clan_id: reduxState.clan_id,
    owner_id: reduxState.owner_id,
    clanBio: reduxState.clanBio,
    clanAvatar: reduxState.clanAvatar,
    clanName: reduxState.clanName
  };
};

export default connect(mapStateToProps, { updateClan })(InGroupMini)
