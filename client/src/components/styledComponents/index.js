import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  background: linear-gradient(#4a62d8, #108ff7);
  color: #fff;
  padding: 5% 0;
  margin: 0;
`;

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
  min-height: 200px;
  border: none;
  width: 100%;
  height: auto;
  border-radius: 20px;
  text-align: center;
  padding: 10px 0;
  margin: 10px 0;
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

  p {
    padding: 1em;
  }
  
`;

export const ListItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 100%;
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

export const Details = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: 0 auto;
  text-align: center;
  width: 70%;
`;

export const FastPass = styled.span`
  color: ${props => (props.true ? "green" : "red")};
`;

export const ErrorMessage = styled.h3`
  text-align center;
`;
