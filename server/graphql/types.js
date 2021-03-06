const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  type Query {
    getAllRestaurants(park: String!): [Restaurant]
    getAllAttractions(park: String!): [Attraction]
    getAllRides(park: String!): [Ride]
  }

  type Restaurant {
    id: Int!
    name: String!
    permalink: String!
    selection: String
    category: String!
    cuisine: String
    phone: String
    price: String
    dress: String
    summary: String
    breakfast: String
    lunch: String
    dinner: String
    atmosphere: String
    specialties: String
  }

  type Attraction {
    name: String!
    short_name: String!
    permalink: String!
  }

  type Ride {
    id: String!
    name: String!
    status: String!
    waitTime: Int!
    fastPass: Boolean!
  }
`;
