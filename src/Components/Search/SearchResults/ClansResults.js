import React from "react";
import styled from "styled-components";

const Clan = styled.div`
  background-color: rgba(229, 229, 229, 0.9);
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 2vh;
  margin-left: 10vw;
  margin-right: 10vw;
  height: fit-content;
  box-shadow: 0px 0px 5px 1px grey;
  img {
    border: 1px solid black;
    /* border-radius: 50%; */
    height: 10vh;
    width: 10vh;
    object-fit: cover;
  }
  overflow: auto;
`;
const ClanTitle = styled.div`
  background-color: rgba(229, 229, 229, 0.9);
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
      <Clan key={i}>
        <h3>Clans</h3>
        <hr />
        <img src={clan.avatar} alt="clan" />
        <h1>{clan.name}</h1>
        <h3>{clan.ranking}</h3>
      </Clan>
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
