import React, { useEffect } from "react"
import Group from "../Group/Group"
import Search from "../Search/Search"
import GamingNews from "../GamingNews/GamingNews"
import Rankings from "../Rankings/Rankings"
import axios from "axios"

//redux:

import { connect } from "react-redux"
import { updateUser } from "../../ducks/reducer"



function Dashboard(props) {
  // useEffect(() => {
  //   getUserInfo()
  // })

  // async function getUserInfo() {
  //   const { updateUser } = props
  //   if (!props.username) {
  //     const user = await axios.get("/auth/account")
  //     updateUser(user.data[0])
  //   }
  // }

  return (
    <> 
      <div>
        <Search />
        <GamingNews />
      </div>
      <Group />
      <Rankings />
      </>
  )
}

// const mapStateToProps = reduxState => {
//   const { bio, username, location, picture, ranking, exp, email, user_id, console } = reduxState
//   return {
//     bio,
//     username,
//     location,
//     picture,
//     ranking,
//     exp, email, user_id, console
//   }
// }

// const mapDispatchToProps = {
//   updateUser
// }

export default 
// connect(mapStateToProps, mapDispatchToProps)
(Dashboard)
