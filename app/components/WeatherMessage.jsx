var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function(){
//     var {location, temp} = this.props;
//
//     return(
//       <h3>The temperature is {temp} in {location}</h3>
//     );
//   }
//
// });

var WeatherMessage = ({temp, location}) => {

  return(
    <h3 className="text-center">The temperature is {temp} in {location}</h3>
  );

}
module.exports = WeatherMessage;
