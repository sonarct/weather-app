import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';
import styles from './CityCard.module.css';
import WeatherParams from './WeatherParams';

const propTypes = {
  city: PropTypes.object,
  comfort: PropTypes.number
};

function CityCard({ city, comfort }) {
  return (
    <div className={ styles.container }>
      <div>
        <div><b>{ city.name }</b></div>
        <br/>
        <WeatherParams
          temp={ city.main.temp }
          humidity={ city.main.humidity }
        />
        <br/>
        <div>Level of comfort: <b>{ Math.round(comfort) }%</b></div>
      </div>
      <div className={ styles.comfort }>
        <Bar size={ comfort } />
      </div>
    </div>
  )
}

CityCard.propTypes = propTypes;

export default CityCard;
