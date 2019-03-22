import React from 'react';
import PropTypes from 'prop-types';
import WeatherParams from './WeatherParams';

const propTypes = {
  temp: PropTypes.number,
  humidity: PropTypes.number
};

function IdealWeather ({ temp, humidity }) {
  return (
    <div>
      <h3>Ideal Climate Conditions:</h3>
      <WeatherParams
        temp={ temp }
        humidity={ humidity }
      />
    </div>
  )
}

IdealWeather.propTypes = propTypes;

export default IdealWeather;
