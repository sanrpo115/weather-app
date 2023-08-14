import { useContext, useEffect, useState } from "react";
import { WeatherAppContext } from "../../context/context";
import { helpSendRequest } from "../../helpers/helpSendRequest";
import Stages from "../Stages";
import moment from 'moment';
import 'moment/locale/es-mx';
import './styles.scss';

const SideBar = () => {
  const { currentWeather, location } = useContext(WeatherAppContext);
  const [astroResponse, setAstroResponse] = useState({ astro: {}});
  const [isDay, setIsDay] = useState(0);

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      init();
    }
    if(currentWeather) {
      console.log("Is Day?", currentWeather.current.is_day);
      setIsDay(currentWeather.current.is_day);
    }
  }, [location.latitude, currentWeather]);

  const init = async () => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/astronomy.json?q=${location.latitude},${location.longitude}&lang=es` , 
      { 'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_HOST },
      'GET',
      {}
    );
    setAstroResponse(response.astronomy);
  };

  return (
    currentWeather && location && <div className={`side-content ${isDay === 1 ? 'is-day' : 'is-night'}`}>
      <div className="top-sidebar">
        <div className="geotime-content">
          <div className="location">
            <h1 className="name">{currentWeather.location.name}</h1>
            <span className="region-country">{currentWeather.location.region}, {currentWeather.location.country}</span>
          </div>
          <div className="timezone">
            {moment().format('hh:mm A')}
          </div>
        </div>
        <div className="temperature-content">
          <div className="icon">
            <img src={`https:${currentWeather.current.condition.icon}`} alt={currentWeather.current.condition.text} />
          </div>
          <div className="temp">
            <span>{currentWeather.current.temp_c}° C</span>
            <h3 className="condition">{currentWeather.current.condition.text}</h3>
          </div>
        </div>
      </div>
      {astroResponse && <div className="astronomy-content">
        <Stages data={astroResponse.astro} fromModal={false}/>
      </div>
      }
    </div>
  );

}

export default SideBar;