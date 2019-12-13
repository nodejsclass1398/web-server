const request = require('request');

const geoLocation = (address , callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoibm9kZWpzY2xhc3MxMzk4IiwiYSI6ImNrMmZ0aGQ3bzA0ZnEzbnBmYnBzZG14aHAifQ.Hgn7m3vVVouSqr2JJVc3Cg&limit=1`;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('network problem' , undefined);
    } else if (body.features.length === 0) {
      callback('please enter another location' , undefined);
    } else {
      callback(undefined , {
        longitude : body.features[0].center[0],
        latitude : body.features[0].center[1] ,
        location :  body.features[0].place_name
      })
    }
  });
  };

  module.exports = geoLocation;