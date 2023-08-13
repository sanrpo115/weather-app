import { useEffect, useState } from 'react';
import { helpSendRequest } from '../../helpers/helpSendRequest';

const TodayOverview = () => {
  const [currentWeather, setCurrentWeather] = useState()

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
      Resumen
      {JSON.stringify(currentWeather)}
    </>
  )
}

export default TodayOverview;