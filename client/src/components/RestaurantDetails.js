import React from "react";
import styled from "styled-components";

const RestaurantDetails = props => {
  const {
    name,
    selection,
    summary,
    breakfast,
    lunch,
    dinner,
    price,
    dress,
    atmosphere,
    specialties
  } = props.location.state;
  return (
    <Details>
      <h1>{name}</h1>
      <h3>Selection: {selection}</h3>
      <p>Summary: {summary}</p>
      {breakfast}
      {lunch}
      {dinner}
      <p>
        Price: {price ? price : `C'mon, you know it's expensive. It's Disney!`}
      </p>
      <p>Dress: {dress}</p>
      <p>
        Atmosphere:
        {atmosphere ? atmosphere : ` Guess there's no atmosphere here...😭`}
      </p>
      <p>
        What to get:{" "}
        {specialties ? specialties : ` No recommendations yet. Go explore!`}
      </p>
    </Details>
  );
};

export default RestaurantDetails;

const Details = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin: 0 auto;
  text-align: center;
  width: 70%;
`;
