import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import axios from 'axios';

const SearchContainer = styled.div`
    position: relative;
    height: 5vh;
    input {
        transition: width .5s;
        border-radius:10px;
        padding: .5%;
    };
`;

const SearchIcon = styled.div`
    position: relative;
    top: 1vh;
    left: 1.5vw;
    width: fit-content;
    
    
`;


const Search = () => {

    const [searchInput, setSearchInput] = useState('')
    const [openSearch, setOpenSearch] = useState(false)

    const fireSearch = () => {
        
    }

    return(
        <div>
            <SearchContainer>
                <SearchIcon>
                    <FontAwesomeIcon icon="search" onClick={_ => setOpenSearch(!openSearch)}/>
                </SearchIcon>
                        <input 
                            onKeyDown={fireSearch} 
                            val={searchInput} 
                            onChange={e => setSearchInput(e.target.value)} 
                            placeholder={
                                openSearch ? 'Search': null
                            } 
                            style={{ 
                                width: openSearch ? "80vw":"0", 
                                borderStyle: openSearch ? "solid":"none",
                                padding: openSearch ? "5px":"0"
                            }}
                        />
            </SearchContainer>
        </div>
    );
};

export default Search;