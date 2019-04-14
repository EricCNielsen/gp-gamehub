import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import axios from 'axios';
import UsersResults from './SearchResults/UsersResults';
import ClansResults from './SearchResults/ClansResults';
import Main from './../Styles/Main'

const SearchContainer = styled.div`
    position: relative;
    height: 5vh;
    input {
        transition: width .5s;
        border-radius:10px;
        padding: .5%;
        outline:none;
        background-color: white;
        height: 2vh;
    };
`;

const SearchIcon = styled.div`
    position: relative;
    top: 1vh;
    left: 1.5vw;
    width: fit-content;
    
    
`;

const SearchResults = styled.div`
    /* position: relative; */
`


const Search = () => {

    const [searchInput, setSearchInput] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    const [searchResults, setSearchResults] = useState({users:[], clans:[], posts:[]})

    const fireSearch = async () => {

        let searchData = await axios.get(`/api/search?search=${searchInput}`)

        setSearchResults(searchData.data)
        
    }
    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }
     const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          fireSearch();
        }
      }

    console.log(searchInput)

    return(
        <div>
            <SearchContainer>
                <SearchIcon>
                    <FontAwesomeIcon icon="search" onClick={_ => setOpenSearch(!openSearch)} style={{cursor: 'pointer'}}/>
                </SearchIcon>
                <input 
                    onKeyDown={handleKeyDown} 
                    val={searchInput} 
                    onChange={handleInput} 
                    placeholder={
                        openSearch ? 'Search': null
                    } 
                    style={{ 
                        width: openSearch ? "80vw":"0", 
                        borderStyle: openSearch ? "solid":"none",
                        padding: openSearch ? "5px":"0",
                        textAlign: "left",
                    }}
                />
                <SearchResults>
                    <UsersResults users = {searchResults.users}  openSearch={openSearch}/>
                    <ClansResults clans = {searchResults.clans} openSearch={openSearch}/>  
                </SearchResults>
            </SearchContainer>
        </div>
    );
};

export default Search;