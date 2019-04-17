import React from "react"

import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import {
  usePopupState,
  bindToggle,
  bindPopper
} from "material-ui-popup-state/hooks"

function AccountImage(props) {
  const popupState = usePopupState({
    variant: "popper",
    popupId: "account-img"
  })
  const { handleLogout, username, picture } = props

  return (
    <div>
      <div
        id="account-img"
        style={{ display: "flex", flexFlow: "column", cursor: "pointer" }}
      >
        <img
          variant="contained"
          {...bindToggle(popupState)}
          src={picture}
          alt={username}
          style={{
            width: "3.5em",
            height: "3.5em",
            padding: ".1em",
            borderRadius: "50%"
          }}
        />
        <h5 style={{ margin: ".1em 0 .7em 0" }}>{username}</h5>
      </div>
      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              position: "relative",
              zIndex: 1000,
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={popupState.close}>
                <MenuList>
                  <NavLink to={`/user/${props.id}`}>
                    <MenuItem button onClick={popupState.close}>
                      My account
                    </MenuItem>
                  </NavLink>
                  <MenuItem button onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

const mapSateToProps = reduxState => {
  const { username, picture, user_id } = reduxState
  return {
    id: user_id,
    username,
    picture
  }
}

export default connect(mapSateToProps)(AccountImage)
