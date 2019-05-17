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
  transition: transform 200ms;
  &:hover {
    transform: scale(1.2)
    transition: transform 200ms;
  }
`;

export const ListItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 50%;
  @media screen and (min-width: 770px) {
    width: 30%;
  }
`;
