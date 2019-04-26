import React, { useState } from "react";
import "./group.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateClan } from "./../../ducks/reducer";
import classNames from "classnames";
import PostViewer from "./../PostsViewer/PostViewer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreatePost from "./CreatePost";

const ClanMiniContainer = styled.div`
  background-color: white;
  border: solid;
  margin-left: 2.5%;
  height: 82vh;
  width: 80vw;
  overflow: scroll;
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const InGroupMini = props => {
  const [open, setOpen] = useState(false);
  console.log(props);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { classes } = props;
  return (
    <ClanMiniContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "4rem"
        }}
      >
        <h1
          style={{
            textAlign: "left",
            fontSize: "2rem",
            fontFamily: "Arial Black"
          }}
        >
          {props.clanName}
        </h1>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Create a post
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a post</DialogTitle>
          <CreatePost handleClose={handleClose} getClan={props.getClan} clan_id={props.clan_id} />
        </Dialog>
      </div>
      <hr />
      <PostViewer id={props.clan_id} />
    </ClanMiniContainer>
  );
};

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.user_id,
    clan_id: reduxState.clan_id,
    owner_id: reduxState.owner_id,
    clanBio: reduxState.clanBio,
    clanAvatar: reduxState.clanAvatar,
    clanName: reduxState.clanName
  };
};

export default connect(
  mapStateToProps,
  { updateClan }
)(InGroupMini);
