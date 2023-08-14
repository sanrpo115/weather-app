import { useContext, useEffect, useState } from 'react';
import { helpSendRequest } from '../../helpers/helpSendRequest';
import { useWeatherApp } from '../../hooks/useWeatherApp';
import { WeatherAppContext } from '../../context/context';

const TodayOverview = () => {
  const { setCurrentWeather, currentWeather, location } = useContext(WeatherAppContext);

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      init();
    }
  }, [location.latitude]);

  const init = async () => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/current.json?q=${location.latitude},${location.longitude}&lang=${process.env.REACT_APP_LANG}` , 
      { 'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_HOST },
      'GET',
      {}
    );
    setCurrentWeather(response);
    console.log('current', response)
  };

  return (
    currentWeather && <>
      Tiempo actual
      <div>
        <p>Humedad</p>
        {currentWeather.current.humidity}
      </div>
      <div>
        <p>Presion</p>
        {currentWeather.current.pressure_mb}
      </div>
      <div>
        <p>Viento</p>
        {currentWeather.current.wind_kph}
      </div>
      <div>
        <p>UV Index</p>
        {currentWeather.current.uv}
      </div>
    </>
  )
}

export default TodayOverview;