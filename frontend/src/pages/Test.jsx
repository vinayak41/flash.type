import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import LiveResult from "../components/LiveResult";
import StartButton from "../components/StartButton";
import TypingBox from "../components/TypingBox";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testStart, setTestStart] = useState(false);
  const typingContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <Wrapper>
      <TypingBox
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        typingContainerRef={typingContainerRef}
        testStart={testStart}
      />
      <StartButton  />
      <LiveResult typingContainerRef={typingContainerRef} />
    </Wrapper>
  );
};

export default Test;
