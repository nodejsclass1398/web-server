const request = require('request');
const forecast = (latitude , longitude , location , callback) => {
    const url =
    `https://api.darksky.net/forecast/7456df05b927769bcf4db4f4035e426c/${latitude},${longitude}`;
  
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('network is unavailable' , undefined);
    } else if (body.error) {
      callback('address is mistake try another request' , undefined);
    } else {
      callback(undefined , 
        `location : ${location}
today ${body.daily.data[0].summary} there is currently ${body.currently.temperature} and ${body.currently.precipProbability} % chanse to rain`
      );
    }
  });
}
module.exports = forecast;