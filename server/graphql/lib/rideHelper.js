const Themeparks = require("themeparks");

module.exports.getWaitTimes = async function(park) {
  const selectedPark = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

  const res = await selectedPark.GetWaitTimes();
  const data = res.map(ride => {
    return {
      id: ride.id,
      name: ride.name,
      status: ride.status,
      waitTime: ride.waitTime,
      fastPass: ride.fastPass
      // openingTime: ride.schedule.openingTime,
      // closingTime: ride.schedule.closingTime
    };
  });

  console.log(data);
};
