import { WiHumidity, WiBarometer, WiStrongWind, WiHot,  WiDirectionUpRight, WiDirectionDownLeft } from "react-icons/wi";
import './styles.scss';

const Cards = ({ data }) => {

  return (
    <div className={`stats-content ${data.maxtemp_c && 'five-ctn'}`}>
      <div className='card'>
        <WiHumidity className='icon'/>
        <div className="info">
          <p className='title'>Humedad</p>
          <span className='data'>{data.humidity || data.avghumidity}%</span>
        </div>
      </div>
      {data.pressure_mb && <div className='card'>
          <WiBarometer className='icon' />
          <div className="info">
            <p className='title'>Presión</p>
            <span className='data'>{data.pressure_mb} hpa</span>
          </div>
        </div>
      }
      <div className='card'>
        <WiStrongWind className='icon' />
        <div className="info">
          <p className='title'>Velocidad del viento</p>
          <span className='data'>{data.wind_kph || data.maxwind_kph} km/h</span>
        </div>
      </div>
      <div className='card'>
        <WiHot className='icon' />
        <div className="info">
          <p className='title'>Índice UV</p>
          <span className='data'>{data.uv}</span>
        </div>
      </div>
      {data.maxtemp_c && <div className='card'>
          <WiDirectionUpRight className='icon' />
          <div className="info">
            <p className='title'>Temperatura máxima</p>
            <span className='data'>{data.maxtemp_c}° C</span>
          </div>
        </div>
      }
      {data.mintemp_c && <div className='card'>
          <WiDirectionDownLeft className='icon' />
          <div className="info">
            <p className='title'>Temperatura mínima</p>
            <span className='data'>{data.mintemp_c}° C</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Cards;