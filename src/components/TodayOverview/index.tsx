import { useEffect, useState } from 'react';
import { helpSendRequest } from '../../helpers/helpSendRequest';
import { useWeatherApp } from '../../hooks/useWeatherApp';

const TodayOverview = () => {
  const { handle: { setCurrentWeather }, value: { currentWeather, location } } = useWeatherApp();

  useEffect(() => {
    console.log("estado", location)
    if (location.latitude !== 0 && location.longitude !== 0) {
      init();
    }
  }, [location.latitude]);

  const init = async () => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/current.json?q=${location.latitude},${location.longitude}` , 
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
        {/* @ts-expect-error Server Component */}
        {currentWeather.current.humidity}
      </div>
      <div>
        <p>Presion</p>
        {/* @ts-expect-error Server Component */}
        {currentWeather.current.pressure_mb}
      </div>
      <div>
        <p>Viento</p>
        {/* @ts-expect-error Server Component */}
        {currentWeather.current.wind_kph}
      </div>
      <div>
        <p>UV Index</p>
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        {currentWeather.current.uv}
      </div>
    </>
  )
}

export default TodayOverview;