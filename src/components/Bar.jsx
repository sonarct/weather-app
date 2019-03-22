import React from 'react';
import PropTypes from 'prop-types';
import { convertValueToColor} from '../helpers';
import styles from './Bar.module.css';

const propTypes = {
  size: PropTypes.number
};

function Bar ({ size }) {
  return (
    <div
      className={ styles.bar }
      style={{
        height: `${ size }%`,
        backgroundColor: convertValueToColor(size)
      }}
    />
  )
}

Bar.propTypes = propTypes;

export default Bar;
