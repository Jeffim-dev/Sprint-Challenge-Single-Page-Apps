import React from "react";
import styled from "styled-components";

const Img = styled.img`
width : 90%;
`;

export default function CharacterCard({char}) {
  return (
    <div>
       <p>Name: {char.name}</p>
       <Img src={char.image} />
       <p>Status: {char.status}</p>
       <p>Species: {char.species}</p>

    </div>
   );
}
