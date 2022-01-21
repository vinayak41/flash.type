import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-size: 2rem;
  font-weight: 500;
  & * {
    font-family: "Audiowide", cursive;
  }
  & h3 {
    margin: 0.5rem 2.5rem;
    & span:nth-child(1) {
      border: 2px solid black;
      padding-left: 10px;
    }
    & span:nth-child(2) {
      background-color: black;
      color: white;
      padding-right: 10px;
      border: 2px solid black;
    }
  }
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <h3>
        <span>Typing</span>
        <span>.ninja </span>
      </h3>
    </HeaderWrapper>
  );
};

export default Header;
