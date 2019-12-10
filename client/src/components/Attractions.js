import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_ATTRACTIONS } from "../queries";
import { PageTitle, Card } from "./styledComponents";
import Loader from "./Loader";
import Error from "./Error";

const Attractions = ({ park }) => {
  return (
    <>
      <PageTitle>Rides and Attractions at {park.name}</PageTitle>
      <Query query={GET_ALL_ATTRACTIONS} variables={{ park: park.permalink }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <Error />;
          return (
            <>
              {data.getAllAttractions.map((attraction, i) => {
                return (
                  <Card key={i}>
                    <h3>{attraction.name}</h3>
                  </Card>
                );
              })}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Attractions;
