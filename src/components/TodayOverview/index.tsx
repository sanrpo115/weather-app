import { useContext, useEffect } from 'react';
import { helpSendRequest } from '../../helpers/helpSendRequest';
import { WeatherAppContext } from '../../context/context';
import Cards from '../Cards';
import './styles.scss';
import NextDays from '../NextDays';

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
    currentWeather && <div className="overview-content">
      <h3>Resumen de hoy</h3>
      <Cards data={currentWeather.current} />
      <NextDays />
    </div>
  )
}

export default TodayOverview;