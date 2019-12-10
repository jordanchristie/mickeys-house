import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrap, Button } from "./styledComponents";

const ButtonSwitch = ({ changeQueryType, park }) => {
  const handleButtonSwitch = event => {
    changeQueryType(event.target.value);
  };
  return (
    <ButtonWrap>
      <Link to={`/restaurants/${park.permalink}`}>
        <Button value="restaurants" onClick={e => handleButtonSwitch(e)}>
          Restaurants
        </Button>
      </Link>
      <Link to={`/attractions/${park.permalink}`}>
        <Button value="attractions" onClick={e => handleButtonSwitch(e)}>
          Attractions & Rides
        </Button>
      </Link>
    </ButtonWrap>
  );
};

export default ButtonSwitch;
