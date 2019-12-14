import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Button = styled.button`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 10px 0 auto;
  border: none;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #fff;
  background-color: #1c5d76;
  font-size: 14px;
  cursor: pointer;
  transition: box-shadow 0.2s;
`;

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const result = response.data.results.filter(char =>
    char.name.toLowerCase().includes(searchResults.toLowerCase())
    );

    setCharacters (result);
  });
},[searchResults]);

const handleInputChange = event => {
  setSearchResults(event.target.value);
};

return (
  <div>
    <form >
      <input
      id="name" type="text" name="textfield" placeholder="Search"
      value={searchResults} onChange={handleInputChange}/>

      <Link to="/"><Button>Home</Button></Link>
    </form>
    <div className="char-list">
      <ul>
      {characters.map(char => <li><CharacterCard key={char.id} char={char} /></li>)
      }
      </ul>
    </div> 
 </div>
)}