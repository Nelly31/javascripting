const {fetchCoordsByIP} = require('./iss');
const {fetchMyIP} = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');

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

fetchISSFlyOverTimes({ latitude: 0, longitude: 0}, (error, response) => {
  if (error) {
    console.log("Error", error);
    return;
  }
  console.log('It worked!', response);
});