import React from "react";
import './group.css';
import styled from "styled-components";
import { connect } from "react-redux";
import { updateClan } from "./../../ducks/reducer";
import PostViewer from "./../PostsViewer/PostViewer";

const ClanMiniContainer = styled.div`
  background-color: white;
  border: solid;
  margin-left: 2.5%;
  height: 82vh;
  width: 80vw;
`

const InGroupMini = (props) => {
  console.log(props)
  return (

    <ClanMiniContainer>
      <h1 style={{textAlign:"left", paddingLeft:"3%"}}>{props.clanName}</h1>
      <hr/>
      <PostViewer id={props.clan_id}/>
    </ClanMiniContainer>
  )
}

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

export default connect(mapStateToProps, { updateClan })(InGroupMini)
