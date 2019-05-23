import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_RESTAURANTS } from "../queries";
import { PageTitle, List, ListItem, Card } from "./styledComponents";
import Loader from "./Loader";

const ReasturantList = ({ park }) => {
  return (
    <>
      <PageTitle>Restaurants at {park.name}</PageTitle>
      <Query query={GET_ALL_RESTAURANTS} variables={{ park: park.permalink }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <h1>Error...</h1>;

          return (
            <List>
              {data.getAllRestaurants.map(restaurant => (
                <ListItem
                  key={restaurant.id}
                  to={{
                    pathname: `/restaurants/${restaurant.id}`,
                    state: restaurant
                  }}
                >
                  <Card>
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
