const fetch = require("node-fetch");

async function getRestaurants(park) {
  const res = await fetch(`https://touringplans.com/${park}/dining.json`);
  const data = await res.json();

  return data[0].map(restaurant => ({
    id: restaurant.id,
    name: restaurant.name,
    permalink: restaurant.permalink,
    category: restaurant.category_code,
    cuisine: restaurant.cuisine,
    phone: restaurant.phone_number,
    price: restaurant.entree_range,
    dress: restaurant.dress,
    summary: restaurant.summary,
    breakfast: restaurant.breakfast_hours,
    lunch: restaurant.lunch_hours,
    dinner: restaurant.dinner_hours,
    atmosphere: restaurant.setting_atmosphere,
    specialties: restaurant.house_specialties
  }));
}

exports.resolvers = {
  Query: {
    getAllRestaurants: async (parent, { park }) => await getRestaurants(park)
  }
};
