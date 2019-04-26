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
  width: 100%;
  img {
    border: 1px solid black;
    border-radius: 50%;
    height: 10vh;
    width: 10vh;
    object-fit: cover;
  }
  overflow: auto;
`
const ClanTitle = styled.div`
  background-color: rgb(229, 229, 229);
  margin-top: 2vh;
  height: fit-content;
`

const ClansResults = ({ clans, openSearch }) => {
  const results = clans.map((clan, i) => {
    return openSearch ? (
      <Link to={`/group/${clan.clan_id}`} style={{ width: "80vw" }}>
        <Clan key={i}>
          <h3>Clans</h3>
          <img
          onError={e => {
            e.target.onerror = null
            e.target.src =
              "https://games.vodacom.co.za/assets/rich/placeholder_games_cover.png"
          }}
          src={clan.avatar}
          alt="clan"
        />
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
  ) : null
}

export default ClansResults
