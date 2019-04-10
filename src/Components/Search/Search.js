import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import axios from 'axios';

const SearchContainer = styled.div`
    position: relative;
    height: fit-content;
    padding: 5px;
`;
const SearchIcon = styled.div`
    position: relative;
    top:1%;
    left: 1%;
    width: fit-content;
`;


const Search = () => {

    const [searchInput, setSearchInput] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    console.log(searchInput)

    const fireSearch = () => {
        
    }

    return(
        <div style={{background:'grey'}}>
            <SearchContainer>
                <SearchIcon>
                    <FontAwesomeIcon icon="search" onClick={_ => setOpenSearch(!openSearch)}/>
                </SearchIcon>
                    {openSearch &&
                        <input onKeyDown={fireSearch} val={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Search' />
                    }
            </SearchContainer>
        </div>
    );
};

export default Search;