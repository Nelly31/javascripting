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
      return;
    }

    callback(null, (IP.ip));
  });
};

const fetchCoordsByIP = function(IP, callback) {
  
  request('https://ipvigilante.com/8.8.8.8', (error, response, body) => {
    // const geoIP = JSON.parse(body);
    // let longLat = {};
    // longLat.Latitude = geoIP.data.latitude;
    // longLat.Longitude = geoIP.data.longitude;
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching location details. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, {latitude, longitude});
    
  });
};

const fetchISSFlyOverTimes = function(latLongObj, callback) {

  request(`http://api.open-notify.org/iss-pass.json?lat=${latLongObj.latitude}&lon=${latLongObj.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // } if (response.statusCode !== 200) {
    //   callback('Nope! It\'s not working', null);
    //   return;
    // }
    
    callback(null, JSON.parse(body).response);
    
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error,null);
      }
    
      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error,null);
        }
        callback(null, nextPasses);
      });
    });
  });
};




module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };

