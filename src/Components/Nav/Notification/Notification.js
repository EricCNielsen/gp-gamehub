import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {
  usePopupState,
  bindToggle,
  bindPopper
} from "material-ui-popup-state/hooks";
import CardImage from "./notificationbanner.jpeg";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Notification(props) {
  const popupState = usePopupState({
    variant: "popper",
    popupId: "account-img"
  });
  // const {  } = props
  const { classes } = props;
  return (
    <div>
      <div>
        <IconButton
          color="inherit"
          variant="contained"
          {...bindToggle(popupState)}
        >
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
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
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.media}
                      image={CardImage}
                      title="switch"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography component="p">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

const mapSateToProps = reduxState => {
  const { username, picture, user_id } = reduxState;
  return {
    id: user_id,
    username,
    picture
  };
};

export default connect(mapSateToProps)(Notification);
