import React from "react";
import styled from "styled-components";

const Button = styled.button`
  min-width: 100%;
  height: 3rem;
  background-color: #bcffb5;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  font-size: 1rem;
  letter-spacing: 2px;
  margin: 10px 0;
  border: none;
`;
const StartButton = ({ handleStartTest }) => {
  return <Button onClick={handleStartTest}>Start</Button>;
};

export default StartButton;