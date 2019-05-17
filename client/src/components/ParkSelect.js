import React, { useState } from "react";

export default function ParkSelect() {
  const parks = [
    {
      id: 1,
      name: "Magic Kingdom",
      permalink: "magic-kingdom",
      parkCall: "WaltDisneyWorldMagicKingdom"
    },
    {
      id: 2,
      name: "Epcot",
      permalink: "epcot",
      parkCall: "WaltDisneyWorldEpcot"
    },
    {
      id: 3,
      name: "Animal Kingdom",
      permalink: "animal-kingdom",
      parkCall: "WaltDisneyWorldAnimalKingdom"
    },
    {
      id: 4,
      name: "Hollywood Studios",
      permalink: "hollywood-studios",
      parkCall: "WaltDisneyWorldHollywoodStudios"
    }
  ];

  const [park, selectPark] = useState(parks[0]);

  const handleParkSelection = (event, parks) => {
    const newPark = parks.filter(park => park.name === event.target.value);
    return selectPark(newPark);
  };

  return (
    <select
      onChange={e => handleParkSelection(e, parks)}
      defaultValue={park.name}
    >
      {parks.map(park => (
        <option key={park.id} value={park.name}>
          {park.name}
        </option>
      ))}
    </select>
  );
}
