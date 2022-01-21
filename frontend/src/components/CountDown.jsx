import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: 1rem 0;
`;

const CircularProgress = styled.div`
  position: relative;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    #4d5bf9 ${(props) => props.time * 360/props.maxTime}deg,
    #cadcff ${(props) => props.time * 360/props.maxTime}deg
  );
  margin: 1rem;
  &::before {
    content: "";
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;

const ValueContainer = styled.div`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  color: #231c3d;
`;

const CountDown = ({time, maxTime}) => {
  return (
    <Wrapper>
      <CircularProgress time={time} maxTime={maxTime}>
        <ValueContainer>{time}</ValueContainer>
      </CircularProgress>
    </Wrapper>
  );
};

export default CountDown;
