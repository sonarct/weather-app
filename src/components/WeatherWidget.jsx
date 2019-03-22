import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { IDEAL_WEATHER } from '../constants';
import BestCity from './BestCity';
import CityList from './CityList';
import GenderSwitch from './GenderSwitch';
import IdealWeather from './IdealWeather';
import { sortCitiesByWeather } from '../helpers';
import { useWeatherApi } from '../hooks';
import styles from './WeatherWidget.module.css';

function WeatherWidget() {
  const [ loading, weatherData ] = useWeatherApi();
  const [ gender, setGender ] = useState('MALE');

  if (loading) {
    return (
      <Loader
        style={ styles.loader }
        type="ThreeDots"
        color="#333333"
        height="100"
        width="100"
      />
    )
  }

  const idealWeather = IDEAL_WEATHER[gender];
  const cityList = sortCitiesByWeather(weatherData, idealWeather);
  const [ best, ...other ] = cityList;
  const [ bestCity, comfort ] = best;
  const { temp, humidity } = idealWeather;

  return (
    <div className={ styles.container }>
      <div className={ styles.leftColumn }>
        <BestCity
          city={ bestCity }
          comfort={ comfort }
        />
        <div className={ styles.additional }>
          <IdealWeather
            temp={ temp }
            humidity={ humidity }
          />
          <GenderSwitch
            onSelect={ setGender }
            selected={ gender }
          />
        </div>
      </div>
      <div className={ styles.rightColumn}>
        <CityList
          list={ other }
        />
      </div>
    </div>
  );
}

export default WeatherWidget;
