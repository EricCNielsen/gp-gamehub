import React, { useState } from "react"
import MobileContainer from "../Styles/MobileContainer"
import CreateClan from "../CreateClan/CreateClan"

const Group = () => {
  return (
    <div>
      <MobileContainer>
        <h3>Top Bar</h3>
        <h1>Group</h1>
        <CreateClan />
      </MobileContainer>
    </div>
  )
}

export default Group
