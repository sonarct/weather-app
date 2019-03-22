import React from 'react';
import PropTypes from 'prop-types';
import { formatTemp} from '../helpers';

const propTypes = {
  temp: PropTypes.number,
  humidity: PropTypes.number
};

function WeatherParams (props) {
  return (
    <div>
      <div>
        <span>Temperature: </span>
        <span><b>{ formatTemp(props.temp) }</b></span>
      </div>
      <div>
        <span>Humidity: </span>
        <span><b>{ props.humidity }%</b></span>
      </div>
    </div>
  )
}

WeatherParams.propTypes = propTypes;

export default WeatherParams;
