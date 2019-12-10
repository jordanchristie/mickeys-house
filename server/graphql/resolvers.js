const fetch = require("node-fetch");
const { getRestaurants, getWaitTimes } = require("./lib");

async function getAttractions(park) {
  const res = await fetch(`http://touringplans.com/${park}/attractions.json`);
  const data = await res.json();

  return data;
}

module.exports.resolvers = {
  Query: {
    getAllRestaurants: async (parent, { park }) => await getRestaurants(park),
    getAllAttractions: async (parent, { park }) => await getAttractions(park),
    getAllRides: async (parent, { park }) => await getWaitTimes(park)
  }
};
