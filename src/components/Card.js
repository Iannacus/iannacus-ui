import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
`;

const BorderLine = styled.span`
  position: ansolute;
  top: 0;
  left: 0;
  inset: 0;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #fc0987,
      #fc0987,
      #fc0987
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${rotate} 6s linear infinite;
    animation-delay: -1.5s;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #fc0987,
      #fc0987,
      #fc0987
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${rotate} 6s linear infinite;
    animation-delay: -4.5s;
  }
`;

const CardBase = styled.div`
  position: relative;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${rotate} 6s linear infinite;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${rotate} 6s linear infinite;
    animation-delay: -3s;
  }
`;

const CardContent = styled.div`
  position: relative;
  margin: 4px;
  background: #222;
  z-index: 2;
  border-radius: 8px;
`;

const Card = ({ width, height, children }) => {
  return (
    <CardBase>
      <BorderLine />
      <CardContent>{children}</CardContent>
    </CardBase>
  );
};

export default Card;
