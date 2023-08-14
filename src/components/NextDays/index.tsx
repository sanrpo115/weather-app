import { useContext, useEffect, useState } from "react";
import { WeatherAppContext } from "../../context/context";
import { helpSendRequest } from "../../helpers/helpSendRequest";
import moment from 'moment';
import 'moment/locale/es-mx';
// import './styles.scss';

const NextDays = () => {
  const { location } = useContext(WeatherAppContext);
  const [forecast, setForecast] = useState<any>({});

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      init();
    }
  }, [location.latitude]);

  const init = async () => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/forecast.json?q=${location.latitude},${location.longitude}&days=3&lang=${process.env.REACT_APP_LANG}` , 
      { 'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_HOST },
      'GET',
      {}
    );
    if (response && response.forecast) {
      setForecast(response.forecast.forecastday);
      console.log(response.forecast.forecastday)
    }
  };

  const getDate = (date: string): string => {
    const newDate = moment(date).format('dddd DD');
    return newDate;
  }

  return (
    forecast.length > 0 && <>
      {forecast.map((item: any, i: number) => {
        if (i !== 0) {
          return (
            <div className="next-card" key={`next-card-${i}`}>
              <div className="date">{getDate(item.date)}</div>
              <div className="info">
                <div className="icon">
                  <img src={`https:${item.day.condition.icon}`} alt={item.day.condition.text} />
                </div>
                <div className="temp">
                  <div className="max">
                    <p>{item.day.maxtemp_c}° C</p>
                  </div>
                  <div className="min">
                    <p>{item.day.mintemp_c}° C</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })}
    </>  
  )

} 

export default NextDays;