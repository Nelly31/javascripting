const {fetchCoordsByIP} = require('./iss');
const {fetchMyIP} = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');
const {nextISSTimesForMyLocation} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP' , ip);
});


fetchCoordsByIP(fetchMyIP, (error, geoCo) => {
  if (error) {
    console.log("Error", error);
    return;
  }
  console.log('It worked!', geoCo);
});

fetchISSFlyOverTimes(fetchCoordsByIP, (error, response) => {
  if (error) {
    console.log("Error", error);
    return;
  }
  ('It worked!', response);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  printPassTimes(passTimes);
});