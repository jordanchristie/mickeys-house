import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ParkSelect from "./components/ParkSelect";
import RestaurantList from "./components/ResturantList";
import AttractionList from "./components/AttractionList";
import RestaurantDetails from "./components/RestaurantDetails";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    color: #333;
  }
`;
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

function App() {
  const [selectedPark, selectPark] = useState(parks[0]);

  console.log(selectedPark);
  return (
    <Wrapper>
      <Router>
        <>
          <GlobalStyle />
          <Header />
          <ParkSelect
            parks={parks}
            selectedPark={selectedPark}
            selectPark={selectPark}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <RestaurantList park={selectedPark} />}
            />
            <Route
              path="/restaurants/:id"
              render={props => <RestaurantDetails {...props} />}
            />
            <Route
              exact
              path="/attractions"
              render={() => <AttractionList park={selectedPark} />}
            />
          </Switch>
        </>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  height: 100%;
  width: 100%;
`;
