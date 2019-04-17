import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import AccountImage from "./AccountImage/AccountImage";
import Notification from "./Notification/Notification";

//MaterialUI
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "./Menu/Menu";
import logo from "./gamehub.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

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
    position: "relative",
    top: 0
  },
  card: {
    maxWidth: 345
  }
};

function Nav(props) {
  useEffect(() => {
    handleCurrent();
  }, []);

  function handleLogout() {
    try {
      props.auth.logout();
      axios.post("/auth/logout");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleCurrent() {
    const { updateUser, history, location } = props;
    const user = await axios.get("/auth/current");
    updateUser(user.data);
    if (user && location.pathname === "/") {
      history.push("/dashboard");
    }
  }

  const { classes, location } = props;
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
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Nav));
