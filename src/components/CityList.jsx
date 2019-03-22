import React from 'react';
import PropTypes from 'prop-types';
import CityCard from './CityCard';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.array)
};

function CityList(props) {
  return (
    <div>
      <h3>Rating of cities:</h3>
      {
        props.list.map(([ city, comfort ]) => {
          return (
            <CityCard
              key={ city.name }
              city={ city }
              comfort={ comfort }
            />
          )
        })
      }
    </div>
  )
}

CityList.propTypes = propTypes;

export default CityList;
