import React, { useEffect } from "react"

//MaterialUI
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const styles = {
  root: {
    // flexGrow: 1,
    overflow: "hidden"
  },
  grow: {
    flexGrow: 1
  },
  navbar: {
    position: "relative",
    top: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function Nav(props) {
  useEffect(() => {
    handleCurrent()
  })

  function handleCurrent() {
    if (props.pathname !== "/") {
    }
  }

  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            GameHub
          </Typography>
          <Button onClick={props.auth.login} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Nav)
