const { getRestaurants, getWaitTimes } = require("./lib");

async function getAttractions(park) {
  const res = await fetch(
    "http://touringplans.com/magic-kingdom/attractions.json"
  );
  const data = await res.json();

  return data.map(attraction => ({
    name: attraction.name,
    short_name: attraction.short_name,
    permalink: attraction.permalink
  }));
}

getWaitTimes();

module.exports.resolvers = {
  Query: {
    getAllRestaurants: async (parent, { park }) => await getRestaurants(park),
    getAllAttractions: async (parent, { park }) => await getAttractions(park)
  }
};
