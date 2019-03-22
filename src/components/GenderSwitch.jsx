import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './GenderSwitch.module.css';

const propTypes = {
  selected: PropTypes.string,
  onSelect: PropTypes.func
};

function GenderSwitch ({ onSelect, selected }) {
  return (
    <div>
      <h3>Choose preferred gender:</h3>
      <div className={ styles.button }>
        <div
          className={ cn([ styles.switch, { [styles.selected]: selected === 'FEMALE' } ]) }
          onClick={ () => onSelect('FEMALE') }
        >
          Female
        </div>
        <div
          className={ cn([ styles.switch, { [styles.selected]: selected === 'MALE' } ]) }
          onClick={ () => onSelect('MALE')}
        >
          Male
        </div>
      </div>
    </div>
  )
}

GenderSwitch.propTypes = propTypes;

export default GenderSwitch;
