import React from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { GiOnTarget } from "react-icons/gi";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  padding: 1rem;
`;

const Label = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: #b4bbc3;
  margin-top: 1rem;
  & p {
    margin: auto 5px;
    line-height: 100%;
  }
`;

const Value = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: #66dffd;
  margin: 10px 0;
  & span:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const LiveResult = () => {
  return (
    <Wrapper>
      <Label>
        <IoMdSpeedometer size={25} />
        <p>SPEED</p>
      </Label>
      <Value>
        <span>39</span>
        <span>WPM</span>
      </Value>
      <Label>
        <GiOnTarget size={25} />
        <p>ACCURECY</p>
      </Label>
      <Value>
        <span>92</span>
        <span>%</span>
      </Value>
    </Wrapper>
  );
};

export default LiveResult;
