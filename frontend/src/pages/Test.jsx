import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CountDown from "../components/CountDown";
import LiveResult from "../components/LiveResult";
import StartButton from "../components/StartButton";
import TypingBox from "../components/TypingBox";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  margin: auto;
`;

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testStart, setTestStart] = useState(false);
  const typingContainerRef = useRef();
  const [wrongCharIndexList, setWrongCharIndexList] = useState([]);
  const [time, setTime] = useState(0);

  const maxTime = 60; //seconds
  const speed = (currentIndex + 1) / 5 / (maxTime / 60); // ((total characters) / 5)  / time in minutes
  const accurecy =
    Math.floor((currentIndex + 1 - wrongCharIndexList.length) * 100 / currentIndex); // (total caracters - wrong character) * 100 / total caracters
  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= maxTime) {
          clearInterval(timerInterval);
          setTestStart(false);
          return prevTime;
        }
        return prevTime + 1;
      });
    }, 1000);
  };

  const handleStartTest = () => {
    typingContainerRef?.current.focus();
    setTestStart(true);
    startTimer();
  };

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
        setTestStart={setTestStart}
        wrongCharIndexList={wrongCharIndexList}
        setWrongCharIndexList={setWrongCharIndexList}
      />
      <RightSection>
        {testStart ? null : <StartButton handleStartTest={handleStartTest} />}
        <CountDown time={time} maxTime={maxTime} />
        <LiveResult speed={speed} accurecy={accurecy} />
      </RightSection>
    </Wrapper>
  );
};

export default Test;
