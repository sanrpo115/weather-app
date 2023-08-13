import { useEffect, useState } from 'react';
import { helpSendRequest } from '../../helpers/helpSendRequest';
import { useWeatherApp } from '../../hooks/useWeatherApp';

const TodayOverview = () => {
  const { 
    handle: { setCurrentWeather },
    value: { currentWeather }
  } = useWeatherApp();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/current.json?q=Medellin` , 
      { 'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_HOST },
      'GET',
      {}
    );
    setCurrentWeather(response);
    console.log(response)
  };

  return (
    <>
      Tiempo actual
      {JSON.stringify(currentWeather)}
    </>
  )
}

export default TodayOverview;