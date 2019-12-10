import React from "react";
import styled from "styled-components";
const Loader = () => <Mouse />;

export default Loader;

const Mouse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #000;
  margin-top: 10%;
  transition: all 1s linear;
  animation: mickeyBounce 0.7s linear 0s infinite;
  &:before {
    content: "";
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: -25%;
    left: -20%;
  }
  &:after {
    content: "";
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top: -25%;
    right: -20%;
  }
  @keyframes mickeyBounce {
    0% {
      transform: translateY(0) scale(1.1);
    }
    10% {
      transform: translateY(0) scale(1.1, 0.9);
    }
    50% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0) scale(1.1);
    }
  }
  @media screen and (max-width: 500px) {
  }
`;
