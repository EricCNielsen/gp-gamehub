import React, { useState, useEffect} from 'react';
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
        outline:none;
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
    const [data, setData] = useState('')

    const fireSearch = () => {
        console.log(11111, searchInput)
        axios.get(`/api/search?search=${searchInput}`)
        .then((res => {
            console.log(res.data)
            setData(res.data)
        }))
    }
    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }
     const handleKeyDown = (e) => {
         console.log(1)
        if (e.key === 'Enter') {
            console.log(2)
          fireSearch();
        }
      }

    console.log(searchInput)

    return(
        <div>
            <SearchContainer>
                <SearchIcon>
                    <FontAwesomeIcon icon="search" onClick={_ => setOpenSearch(!openSearch)}/>
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
                                padding: openSearch ? "5px":"0"
                            }}
                        />
                        
            </SearchContainer>
        </div>
    );
};

export default Search;