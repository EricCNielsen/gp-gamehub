import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCog } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"

//Routing:
import { NavLink } from "react-router-dom"

function Menu(props) {
  const [toggle, setToggle] = useState(false)

  function toggleDrawer() {
    setToggle(!toggle)
  }

  const sideList = (
    <div>
      <List>
        <NavLink to="/group">
          <ListItem button onClick={toggleDrawer} key="Clans">
            <ListItemIcon>
              <FontAwesomeIcon icon={faUsers} size="lg" />
            </ListItemIcon>
            <ListItemText primary="Clans" />
          </ListItem>
        </NavLink>
        <NavLink to="/dashboard">
          <ListItem button onClick={toggleDrawer} key="Main">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </ListItemIcon>
            <ListItemText onClick={toggleDrawer} primary="Main" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  )

  const EditAccount = (
    <div>
      <List>
        <NavLink to={`/user/${props.id}`}>
          <ListItem button key="Account">
            <ListItemIcon>
              <FontAwesomeIcon icon={faUserCog} size="lg" />
            </ListItemIcon>
            <ListItemText onClick={toggleDrawer} primary="Account" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  )

  return (
    <div>
      <IconButton
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={toggle} onClose={() => setToggle(false)}>
        <div>
          <h2>GameHub</h2>
        </div>
        <Divider />
        <div tabIndex={0} role="button">
          {sideList}
        </div>
        <div tabIndex={0} role="button">
          {EditAccount}
        </div>
      </Drawer>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    id: state.user_id
  }
}

export default connect(
  mapStateToProps,
  null
)(Menu)
