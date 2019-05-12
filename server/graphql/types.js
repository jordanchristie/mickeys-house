const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    getAllRestaurants(park: String!): [Restaurant]
  }

  type Restaurant {
    id: Int!
    name: String!
    permalink: String!
    category: String!
    cuisine: String!
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
`;
