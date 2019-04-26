import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import axios from "axios";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import UsersResults from "./SearchResults/UsersResults";
import ClansResults from "./SearchResults/ClansResults";

const SearchContainer = styled.div`
  position: relative;
  height: 5vh;
  width: 100vw;
  input {
    transition: width 0.5s;
    padding: 0.5%;
    outline: none;
    background-color: white;
    height: 2vh;
    border-bottom: 1px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
    position: relative;
    left: 1vw;
    width: 85vw;
  }
  h1{
    font-size: 40px;
    font-weight: bold;
  }
  z-index: 1;
`;

const SearchIcon = styled.div`
  position: relative;
  top: 1vh;
  left: 1.5vw;
  width: fit-content;
  z-index: 2;
`;

const SearchResults = styled.div`
  width: 98.5vw;
  height: 100vh;
  align-content: center;
  background: white;
  border-bottom: 1px solid black;
  margin: 0.5%;
  padding-top: 1%;
`;

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [openSearch, setOpenSearch] = useState(true);
  const [freezeModal, setFreezeModal] = useState(false);
  const [searchResults, setSearchResults] = useState({
    users: [],
    clans: [],
    posts: []
  });
  const [touchEvent, setTouchEvent] = useState();

  const fireSearch = async () => {
    let searchData = await axios.get(`/api/search?search=${searchInput}`);
    setSearchResults(searchData.data);
  };
  const handleInput = e => {
    setSearchInput(e.target.value);
  };
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      fireSearch();
    }
  };
  // const handleClickAway = () => {
  //   if (openSearch) {
  //     setOpenSearch(!openSearch)
  //   }
  // }

  // console.log(searchInput)

  return (
    <SearchContainer>
      <SearchIcon>
        <FontAwesomeIcon
          icon="search"
          onClick={_ => setOpenSearch(!openSearch)}
          style={{ cursor: "pointer" }}
        />
      </SearchIcon>
      <div>
        {" "}
        {openSearch ? (
          <SearchResults>
            <input
              onKeyDown={handleKeyDown}
              val={searchInput}
              onChange={handleInput}
              placeholder={openSearch ? "Search" : null}
              // style={{
              //   width: openSearch ? "80vw" : "0",
              //   borderBottom: openSearch ? "solid" : "none",
              //   padding: openSearch ? "5px" : "0",
              //   textAlign: "left"
              // }}
            />

            <UsersResults users={searchResults.users} openSearch={openSearch} />
            <ClansResults clans={searchResults.clans} openSearch={openSearch} />
          </SearchResults>
        ) : null}
      </div>
    </SearchContainer>
  );
};

export default Search;
