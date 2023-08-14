import { useContext, useEffect } from 'react';
import { helpSendRequest } from '../../helpers/helpSendRequest';
import { WeatherAppContext } from '../../context/context';
import { WiHumidity, WiBarometer, WiStrongWind, WiHot } from "react-icons/wi";
import './styles.scss';

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
      <div className="cards-content">
        <div className='card'>
          <WiHumidity className='icon'/>
          <div className="info">
            <p className='title'>Humedad</p>
            <span className='data'>{currentWeather.current.humidity}%</span>
          </div>
        </div>
        <div className='card'>
          <WiBarometer className='icon' />
          <div className="info">
            <p className='title'>Presion</p>
            <span className='data'>{currentWeather.current.pressure_mb} hpa</span>
          </div>
        </div>
        <div className='card'>
          <WiStrongWind className='icon' />
          <div className="info">
            <p className='title'>Velocidad del viento</p>
            <span className='data'>{currentWeather.current.wind_kph} km/h</span>
          </div>
        </div>
        <div className='card'>
          <WiHot className='icon' />
          <div className="info">
            <p className='title'>Índice UV</p>
            <span className='data'>{currentWeather.current.uv}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayOverview;