import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrap, Button } from "./styledComponents";

const ButtonSwitch = ({ queryType, changeQueryType }) => {
  const handleButtonSwitch = event => {
    changeQueryType(event.target.value);
  };
  return (
    <ButtonWrap>
      <Link to="restaurants">
        <Button value="restaurants" onClick={e => handleButtonSwitch(e)}>
          Restaurants
        </Button>
      </Link>
      <Link to="attractions">
        <Button value="attractions" onClick={e => handleButtonSwitch(e)}>
          Attractions & Rides
        </Button>
      </Link>
    </ButtonWrap>
  );
};

export default ButtonSwitch;
