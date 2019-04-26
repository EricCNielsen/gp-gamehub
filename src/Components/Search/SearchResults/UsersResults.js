import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import InviteMember from "../../InviteMember/InviteMember"
import Button from "@material-ui/core/Button"

// redux:
import { connect } from "react-redux"

const User = styled.div`
  padding: 1%;
  position: relative;
  margin-bottom: 2vh;
  background: rgb(229,229,229);
  height: fit-content;
  border-top: 2px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    border: 1px solid black;
    border-radius: 50%;
    height: 3em;
    width: 3em;
    object-fit: cover;
  }
  overflow: auto;
`
const SearchTitle = styled.div`
  background-color: rgb(229, 229, 229);
  margin-top: 2vh;
  height: fit-content;
`

function UserResults({ users, openSearch, registeredClans, user_id }) {
  const [modalInfo, setModalInfo] = useState({ open: false, user: 0 })
  const handleClanInvite = user => {
    setModalInfo({ open: true, user })
  }

  const results = users.map((user, i) => {
    return openSearch ? (
      <User key={i}>
          <Link to={`/user/${user.user_id}`}>
            {!user.picture ? (
              <img
                src="https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                alt="user profile"
              />
            ) : (
              <img
                src={user.picture}
                onError={e => {
                  e.target.onerror = null
                  e.target.src =
                    "https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
                }}
                alt="user profile"
              />
            )}
            <h4>{user.username}</h4>
            <h3>{user.ranking}</h3>
            <h5>{user.location ? user.location : 'Not Known'}</h5>
          </Link>
          {registeredClans.length > 0 && user_id !== user.user_id ? (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => handleClanInvite(user)}
            >
              Invite to Clan
            </Button>
          ) : null}
      </User>
    ) : null
  })
  return openSearch ? (
    <SearchTitle>
      <InviteMember modalInfo={modalInfo} />
      <h1>Users</h1>
      {results}
    </SearchTitle>
  ) : null
}

const mapStateToProps = reduxState => {
  const { registeredClans, user_id } = reduxState
  return {
    registeredClans,
    user_id
  }
}

export default connect(mapStateToProps)(UserResults)
