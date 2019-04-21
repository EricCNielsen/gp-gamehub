import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Clan = styled.div`
  padding: 1%;
  background: rgb(229,229,229);
  position: relative;
  margin-bottom: 2vh;
  height: fit-content;
  border-top: 2px solid black;
  width: 98%;
  img {
    border: 1px solid black;
    border-radius: 50%;
    height: 10vh;
    width: 10vh;
    object-fit: cover;
  }
  overflow: auto;
`;
const ClanTitle = styled.div`
  background-color: rgb(229, 229, 229);
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 2vh;
  margin-left: 10vw;
  margin-right: 10vw;
  height: fit-content;
`;

const ClansResults = ({ clans, openSearch }) => {
  const results = clans.map((clan, i) => {
    return openSearch ? (
      <Link to={`/group/${clan.clan_id}`} style={{ width: "80vw" }}>
        <Clan key={i}>
          <h3>Clans</h3>
          <hr />
          <img src={clan.avatar} alt="clan" />
          <h1>{clan.name}</h1>
          <h3>{clan.ranking}</h3>
        </Clan>
      </Link>
    ) : null;
  });
  return openSearch ? (
    <ClanTitle>
      <h1>Clans</h1>
      {results}
    </ClanTitle>
  ) : null;
};

export default ClansResults;
