import React, { useState, useEffect } from "react"
import Group from "../Group/Group"
import Search from "../Search/Search"
import GamingNews from "../GamingNews/GamingNews"
import Rankings from "../Rankings/Rankings"

//redux:

import { connect } from "react-redux"
import { updateUser } from "../../ducks/reducer"

function Dashboard() {
  useEffect(() => {
    getUserInfo()
  })

  function getUserInfo() {}

  return (
    <div>
      <Search />
      <Group />
      <GamingNews />
      <Rankings />
    </div>
  )
}

const mapDispatchToProps = {
  updateUser
}

export default connect(
  null,
  mapDispatchToProps
)(Dashboard)
