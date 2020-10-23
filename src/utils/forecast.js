const request = require("postman-request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=ab7bba87784bde193a66b56586ed9996&query=" + latitude + "," + longitude
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service.", undefined)
        } else if (body.error) {
            callback("Unable to find location.", undefined)            
        } else {
            console.log(body)
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out and it feels like " + body.current.feelslike + ". Air humidity is " + body.current.humidity + "% and visibility is " + body.current.visibility + "km.")
        }
    })
}

module.exports = forecast
