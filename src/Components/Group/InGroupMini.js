import React, { useState } from "react";
import "./group.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateClan } from "./../../ducks/reducer";
import PostViewer from "./../PostsViewer/PostViewer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ClanMiniContainer = styled.div`
  background-color: white;
  margin: 0;
`;

const InGroupMini = props => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(props);
  const { classes } = props;
  return (
    <div className="feed">
      <div>
        <h1 style={{ textAlign: "left", paddingLeft: "3%" }}>
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
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <hr />
      <PostViewer id={props.clan_id} />
    </div>
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
