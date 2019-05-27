import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Title>Mickey's House</Title>;
}

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  background: linear-gradient(#4a62d8, #108ff7);
  color: #fff;
  padding: 5% 0;
  margin: 0;
`;
