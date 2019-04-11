import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const CreatorsWrapper = styled.div`
  background-image: url("https://images.pexels.com/photos/929824/pexels-photo-929824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

  background-size: cover;
  border: 0.1px solid transparent;
  height: 100vh;
`;

function Creators(props, { id }) {
  const { classes } = props;
  return (
    <CreatorsWrapper>
      <h1>this is where the creator stuff will go</h1>
      <p>asdfghjk </p>
      <Button
        id="creators"
        onClick={props.auth.login}
        style={{
          position: "absolute",
          marginTop: "400px",
          marginLeft: "300px"
        }}
        size="large"
        color="primary"
      >
        Sign up
      </Button>
    </CreatorsWrapper>
  );
}

Creators.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Creators);
