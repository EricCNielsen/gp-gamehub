import React, { useState, useEffect } from "react"
import Group from "../Group/Group"
import Search from "../Search/Search"
import GamingNews from "../GamingNews/GamingNews"
import Rankings from "../Rankings/Rankings"
import axios from "axios"
//redux:

import { connect } from "react-redux"
import { updateUser } from "../../ducks/reducer"

function Dashboard(props) {
  useEffect(() => {
    getUserInfo()
  })

  async function getUserInfo() {
    console.log(!props.username)
    if (!props.username) {
      const user = await axios.get("/auth/user")
      console.log(user)
    }
  }

  return (
    <div>
      <Search />
      <Group />
      <GamingNews />
      <Rankings />
    </div>
  )
}

const mapSateToProps = reduxState => {
  const { username } = reduxState
  return {
    username
  }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(
  null,
  mapDispatchToProps
)(Dashboard)
