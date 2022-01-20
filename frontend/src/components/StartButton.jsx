import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 6rem;
  height: 3rem;
  background-color: #95c590;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: rgb(0, 0, 0) 0px 3px 8px;
  font-size: 1rem;
  letter-spacing: 2px;
`;
const StartButton = ({ typingContainerRef }) => {
  const handleStartTest = () => {
    typingContainerRef.current.focus();
  };
  return <Button onClick={handleStartTest}>Start</Button>;
};

export default StartButton;