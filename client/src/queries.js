import gql from "graphql-tag";

export const GET_ALL_RESTAURANTS = gql`
  query($park: String!) {
    getAllRestaurants(park: $park) {
      id
      name
      permalink
      selection
      category
      cuisine
      price
      dress
      breakfast
      lunch
      dinner
      summary
      atmosphere
      specialties
    }
  }
`;

export const GET_ALL_ATTRACTIONS = gql`
  query($park: String!) {
    getAllAttractions(park: $park) {
      name
      short_name
      permalink
    }
  }
`;

export const GET_ALL_RIDES = gql`
  query($park: String!) {
    getAllRides(park: $park) {
      id
      name
      status
      waitTime
      fastPass
    }
  }
`;
