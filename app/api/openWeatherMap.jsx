var axios = require('axios');
const API_KEY = 'c6f474d91d53177532ea5db97ba11bf1';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c6f474d91d53177532ea5db97ba11bf1&units=imperial';

module.exports = {
  getTemp: function(location){

    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{

        return res.data.main.temp;

      }
    },function(res){
      throw new Error(res.data.message);
    });
  }
}
