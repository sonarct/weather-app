import React from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

const propTypes = {
  city: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number
    }),
    comfort: PropTypes.number,
  })
};

function BestCity({ city, comfort }) {
  return (
    <div>
      <h3>City with the most ideal weather conditions:</h3>
      <CityCard
        city={ city }
        comfort={ comfort }
      />
    </div>
  )
}

BestCity.propTypes = propTypes;

export default BestCity;
