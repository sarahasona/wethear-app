const request = require('request');
const forecst = (lon, lat, callback) => {
    const access_token = '4ceaf984ee7c38e29790ac1490a718d1'
    const url = `http://api.weatherstack.com/current?access_key=${access_token}&query=${lon},${lat}`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined)
        }
        else if (response.body.error) {
            callback(response.body.error.type, undefined)
            //response.body.error.type
        }
        else {
            const data = response.body
            callback(undefined, {
                name: data.location.name,
                country: data.location.country,
                region: data.location.region,
                lat: data.location.lat,
                lon: data.location.lon
            })
        }

    })
}
module.exports = {
    forecst
}