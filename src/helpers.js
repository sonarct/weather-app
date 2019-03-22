import { HUMIDITY_EFFECT } from './constants';

/**
 * @param {[Number, Number]}
 * @param {[Number, Number]}
 * @return {Number}
 */
function getVectorLength ([x1, y1], [x2, y2]) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

/**
 * @param {Object[]} cities
 * @param {{
 *   temp: Number,
 *   humidity: Number
 * }} idealWeather
 * @return {Array[]}
 */
export function sortCitiesByWeather (cities, idealWeather) {
  const idealPoint = [ idealWeather.temp, idealWeather.humidity * HUMIDITY_EFFECT ];

  const weights = cities.reduce((acc, city) => {
    const cityPoint = [ city.main.temp, city.main.humidity * HUMIDITY_EFFECT ];
    acc.push([city, Math.round(getVectorLength(cityPoint, idealPoint) * 100) / 100]);
    return acc
  }, []);
  
  const sorted = weights.sort((a, b) => a[1] - b[1]);
  const worstCityComfort = sorted[sorted.length - 1][1];
    
  return sorted.map(item => [ item[0], 100 - (Math.round(item[1] * 100 / worstCityComfort)) ]);
}

export function formatTemp (temp) {
  return `${ Math.round(temp * 10) / 10 }°C`;
}

/**
 * @param {Number} value
 * @return {String}
 */
export function convertValueToColor (value) {
  const green = Math.round(value * 255 / 100);
  const red = Math.round((100 - value) * 255 / 100);
  return `rgb(${red},${green},0`
}

