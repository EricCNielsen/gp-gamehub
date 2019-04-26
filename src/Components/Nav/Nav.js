import React, { useEffect } from "react"
import axios from "axios"
// import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { updateUser, updateRegisteredClans } from "../../ducks/reducer"
import AccountImage from "./AccountImage/AccountImage"
import Notification from "./Notification/Notification"

//MaterialUI
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Menu from "./Menu/Menu"
import logo from "./gamehub.png"

const styles = {
  root: {
    // flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    zIndex: 1
  },
  grow: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "#414744",
    color: "#FF473A",
    transparency: 0.6,
    position: "relative",
    top: 0
  },
  card: {
    maxWidth: 345
  }
}

function Nav(props) {
  useEffect(() => {
    handleCurrent()
  })

  function handleLogout() {
    try {
      props.auth.logout()
      axios.post("/auth/logout")
    } catch (err) {
      console.log(err)
    }
  }

  async function handleCurrent() {
    try {
      const { updateUser, updateRegisteredClans, history, location } = props
      const user = await axios.get("/auth/account")
      updateUser(user.data)
      const getRegisteredClans = await axios.get("/api/registeredclans")
      updateRegisteredClans(getRegisteredClans.data)
      if (user && location.pathname === "/") {
        history.push("/dashboard")
      }
    } catch (err) {
      if (location.pathname !== "/") {
        props.history.push("/")
      }
    }
  }

  const { classes, location } = props
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          {location.pathname !== "/" && <Menu history={props.history} />}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img
              style={{
                width: "300px",
                height: "75px"
              }}
              src={logo}
              alt="logo"
            />
          </Typography>
          {location.pathname === "/" ? (
            <Button onClick={props.auth.login} color="inherit">
              Login
            </Button>
          ) : (
            <>
              <Notification />
              <AccountImage handleLogout={handleLogout} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  updateUser,
  updateRegisteredClans
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Nav))
