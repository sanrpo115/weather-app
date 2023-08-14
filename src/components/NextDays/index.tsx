import { useContext, useEffect, useState } from "react";
import { WeatherAppContext } from "../../context/context";
import { helpSendRequest } from "../../helpers/helpSendRequest";
import { WiDirectionUpRight, WiDirectionDownLeft } from "react-icons/wi";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import 'moment/locale/es-mx';
import './styles.scss';

const NextDays = () => {
  const { location } = useContext(WeatherAppContext);
  const [forecast, setForecast] = useState<any>({});
  const [show, setShow] = useState(false);

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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    forecast.length > 0 && <>
      <h3>Pronóstico próximos 2 dia(s)</h3>
      <div className="cards-content">
        {forecast.map((item: any, i: number) => {
          if (i !== 0) {
            return (
              <div className="next-card" key={`next-card-${i}`} onClick={handleShow}>
                <div className="date">{getDate(item.date)}</div>
                <div className="info">
                  <div className="icon">
                    <img src={`https:${item.day.condition.icon}`} alt={item.day.condition.text} />
                  </div>
                  <div className="temp">
                    <div className="temp_data max">
                      <WiDirectionUpRight className="icon" />
                      <p>{item.day.maxtemp_c}° C</p>
                    </div>
                    <div className="temp_data min">
                      <p>{item.day.mintemp_c}° C</p>
                      <WiDirectionDownLeft className="icon"/>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>  
  )

} 

export default NextDays;