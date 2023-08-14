import { WiHumidity, WiBarometer, WiStrongWind, WiHot } from "react-icons/wi";

const Cards = ({ data }) => {

  return (
    <div className="cards-content">
      <div className='card'>
        <WiHumidity className='icon'/>
        <div className="info">
          <p className='title'>Humedad</p>
          <span className='data'>{data.humidity}%</span>
        </div>
      </div>
      <div className='card'>
          <WiBarometer className='icon' />
          <div className="info">
            <p className='title'>Presion</p>
            <span className='data'>{data.pressure_mb} hpa</span>
          </div>
        </div>
        <div className='card'>
          <WiStrongWind className='icon' />
          <div className="info">
            <p className='title'>Velocidad del viento</p>
            <span className='data'>{data.wind_kph} km/h</span>
          </div>
        </div>
        <div className='card'>
          <WiHot className='icon' />
          <div className="info">
            <p className='title'>Índice UV</p>
            <span className='data'>{data.uv}</span>
          </div>
        </div>
    </div>
  )
}

export default Cards;