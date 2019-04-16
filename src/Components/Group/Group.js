import React, { useState } from "react"
import MobileContainer from "../Styles/MobileContainer"
import './group.css';

const Group = () => {
  return (
    <>
      <div className='clanInfo'>
        <img id='logo' src='https://cms.qz.com/wp-content/uploads/2018/05/china-pandas-eyes-turned-white-in-sichuan-2018-e1525405988661.jpg?quality=75&strip=all&w=410&h=231' atl='logo'/>
        <h1>Clan Name Here</h1>
        <p>Clan Bio Here</p>
      </div>
      <div className='feed'>
      Find Posts Here
      </div>
      <div className='ranking'>
      Rankings
      </div>
    </>
  )
}

export default Group
