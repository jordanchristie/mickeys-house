import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const Card = styled.article`
  background: linear-gradient(#4a62d8, #108ff7);
  border: none;
  border-radius: 20px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  color: #fff;
  transition: all 0.3s ease;
  &:hover {
    animation: cardBounce .35s
    transform: scale3d(1,1,1);
    transition: all 0.3s ease;
  }
  @keyframes cardBounce {
    0%,5%,25%,100%{
      transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)
    }
    0% {
      transform:scale3d(1, 1, 1)
    }
    5% {
      transform:scale3d(0.97, 0.97, 0.97)
    }
    25% {
      transform:scale3d(1.1, 1.1, 1.1);box-shadow:0 .4375rem 1.125rem 0 rgba(0,0,0,0.3)
    }
    100% {
      transform:scale3D(1, 1, 1)
    }
  }
`;

export const ListItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 70%;
  @media screen and (min-width: 669px) {
    width: 40%;
  }
  @media screen and (min-width: 969px) {
    width: 30%;
  }
`;

export const ButtonWrap = styled.section`
  text-align: center;
`;

export const Button = styled.button`
  margin: 1em;
  padding: 15px;
  border-radius: 20px;
  font-size: 24px;
  cursor: pointer;
  outline: 0;
  transition: all 0.3s linear;
  &:hover {
    transform: translateY(-10px);
    background: #108ff7;
    transition: all 0.3s linear;
    color: #fff;
    box-shadow: 0px 5px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
