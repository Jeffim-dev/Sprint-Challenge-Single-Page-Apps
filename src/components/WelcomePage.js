import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 40px auto;
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



export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <img
          className="main-img"
          src="https://media.cdn.adultswim.com/uploads/20191004/191041327281-r&m4_Hero_000000.png"
          alt="rick"
        />
      </header>

      <Link to={'/characters'}><Button>Characters</Button></Link>

    </section>
  );
}
