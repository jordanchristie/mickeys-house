import React from "react";
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
const parks = {
  animalKingdom: "animal-kingdom",
  epcot: "epcot",
  hollywoodStudios: "hollywood-studios",
  magicKingdom: "magic-kingdom"
};

function App() {
  return (
    <Wrapper>
      <Router>
        <>
          <GlobalStyle />
          <Header />
          <ParkSelect />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <RestaurantList park={parks.epcot} />}
            />
            <Route
              path="/restaurants/:id"
              render={props => <RestaurantDetails {...props} />}
            />
            <Route
              exact
              path="/attractions"
              render={() => <AttractionList park={parks.epcot} />}
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
