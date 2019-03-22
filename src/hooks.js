import { useEffect, useState } from 'react';
import cities from './data/cities';
import mock from './data/mock';
import { API_KEY } from './constants';

export function useWeatherApi () {
  const [ loading, setLoading ] = useState(true);
  const [ weatherData, setWeatherData ] = useState([]);

  useEffect(() => {
    const cityList = cities.join(',');
    const link = `https://api.openweathermap.org/data/2.5/group?id=${ cityList }&units=metric&APPID=${ API_KEY }`;

    fetch(link).then(response => response.json()).then(json => {
      setWeatherData(json.list);
      setLoading(false);
    }).catch(error => {
      console.warn(error);
      // Fallback to mocked date in case of blocked API
      setWeatherData(mock.list);
      setLoading(false);
    })
  }, []);

  return [ loading, weatherData ];
}
