const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api.ipify.org?format=json', (error, response, body) => {
    const IP = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
    } else {
      callback(null, (IP.ip));
    }
  });
};

const fetchCoordsByIP = function(IP, callback) {
  
  request('https://ipvigilante.com/8.8.8.8', (error, response, body) => {
    const geoIP = JSON.parse(body);
    let longLat = {};
    longLat.Latitude = geoIP.data.latitude;
    longLat.Longitude = geoIP.data.longitude;
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching location details. Response ${body}`;
      callback(Error(msg), null);
    } else {
      callback(null, longLat);
    }
  });
};

const fetchISSFlyOverTimes = function(latLongObj, callback) {

  request(`http://api.open-notify.org/iss-pass.json?lat=${latLongObj.latitude}&lon=${latLongObj.longitude}`, (error, response, body) => {
    const positionObj = JSON.parse(body);
    if (error) {
      callback(error, null);
    } if (positionObj.response === undefined) {
      callback('Nope! It\'s not working', null);
    } else {
      callback(null, positionObj.response);
    }
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
