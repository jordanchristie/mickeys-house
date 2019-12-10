import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_RESTAURANTS } from "../queries";
import { PageTitle, List, ListItem, Card } from "./styledComponents";
import Search from "./Search";
import Loader from "./Loader";
import Error from "./Error";

const ReasturantList = ({ park }) => {
  return (
    <>
      <PageTitle>Restaurants at {park.name}</PageTitle>
      <Query query={GET_ALL_RESTAURANTS} variables={{ park: park.permalink }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <Error error={error} />;

          const names = data.getAllRestaurants.map(rest =>
            rest.name.toLowerCase()
          );

          return (
            <>
              <Search data={names} />
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
            </>
          );
        }}
      </Query>
    </>
  );
};

export default ReasturantList;
