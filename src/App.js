import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import styles from './App.module.css';

function App() {
  return (
    <div className={ styles.container }>
      <WeatherWidget />
    </div>
  )
}

export default App;
