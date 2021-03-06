import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_RIDES } from "../queries";
import { PageTitle, List, Card, FastPass } from "./styledComponents";
import Loader from "./Loader";
import Error from "./Error";

const AttractionList = ({ park }) => {
  return (
    <>
      <PageTitle>Rides and Attractions at {park.name}</PageTitle>
      <Query query={GET_ALL_RIDES} variables={{ park: park.parkCall }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <Error error={error} />;

          return (
            <List>
              {data.getAllRides.map((ride, id) => (
                <Card key={ride.id}>
                  <h1>{ride.name}</h1>
                  <p>Status: {ride.status}</p>
                  <p>Wait Time: {ride.waitTime} minutes</p>
                  <p>
                    Fastpass:
                    <FastPass true={ride.fastPass}>
                      {ride.fastPass ? " Yes" : " No"}
                    </FastPass>
                  </p>
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
