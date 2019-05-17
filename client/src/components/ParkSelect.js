import React from "react";
import styled from "styled-components";

const ParkSelect = ({ selectedPark, parks, selectPark }) => {
  const handleParkSelection = (event, parks) => {
    const newPark = parks.find(park => park.name === event.target.value);
    return selectPark(newPark);
  };

  return (
    <StyledSelect
      onChange={e => handleParkSelection(e, parks)}
      defaultValue={selectedPark.name}
    >
      {parks.map(park => (
        <option key={park.id} value={park.name}>
          {park.name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default ParkSelect;

const StyledSelect = styled.select`
  font-size: 24px;
  border: none;
  outline: 0;
`;
