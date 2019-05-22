import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_RIDES } from "../queries";
import { PageTitle, List, Card } from "./styledComponents";

const AttractionList = ({ park }) => {
  console.log(park.parkCall);
  return (
    <>
      <PageTitle>Rides and Attractions at {park.name}</PageTitle>
      <Query query={GET_ALL_RIDES} variables={{ park: park.parkCall }}>
        {({ data, loading, error }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error...</h1>;

          return (
            <List>
              {data.getAllRides.map((ride, id) => (
                <Card key={ride.id}>
                  <h1>{ride.name}</h1>
                  <p>Status: {ride.status}</p>
                  <p>Wait Time: {ride.waitTime} minutes</p>
                  <p>Fastpass: {ride.fastPass ? "Yes" : "No"}</p>
                </Card>
              ))}
            </List>
          );
        }}
      </Query>
    </>
  );
};

export default AttractionList;
