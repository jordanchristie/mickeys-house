import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_RESTAURANTS } from "../queries";
import { PageTitle, List, ListItem, Card } from "./styledComponents";

const ReasturantList = ({ park }) => {
  return (
    <>
      <PageTitle>Restaurants at {park}</PageTitle>
      <Query query={GET_ALL_RESTAURANTS} variables={{ park }}>
        {({ data, loading, error }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error...</h1>;

          return (
            <List>
              {data.getAllRestaurants.map(restaurant => (
                <ListItem
                  to={{
                    pathname: `/restaurants/${restaurant.id}`,
                    state: restaurant
                  }}
                >
                  <Card key={restaurant.id}>
                    <h1>{restaurant.name}</h1>
                    <p>{restaurant.selection}</p>
                  </Card>
                </ListItem>
              ))}
            </List>
          );
        }}
      </Query>
    </>
  );
};

export default ReasturantList;
