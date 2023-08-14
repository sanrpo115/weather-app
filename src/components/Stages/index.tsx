import { WiHorizonAlt, WiHorizon } from "react-icons/wi";
import moment from 'moment';
import 'moment/locale/es-mx';
import './styles.scss';

const Stages = ({ data, fromModal }) => {

  const getHoursAgo = (timeString: string): string => {
    const now = moment();
    const format = "hh:mm A";
    const timeAgo = moment(timeString, format)
    const diff = Math.abs(moment.duration(now.diff(timeAgo)).hours());
    return `${!fromModal ? 'Hace' : 'Faltan'} ${diff} ${diff > 1 ? 'horas' : 'hora' }`;
  }

  return (
    <>
      <div className="stages">
        {!fromModal && <h3>Amanecer y Atardecer</h3>}
        <ul className="list-stages">
          <li className="stage">
            <div className="left-info">
              <WiHorizonAlt className="icon"/>
              <div className="data">
                <span className="phase">Amanecer</span>
                <span className="time">{data.sunrise}</span>
              </div>
            </div>
            <div className="time-ago">
              {getHoursAgo(data.sunrise)}
            </div>
          </li>
          <li className="stage">
            <div className="left-info">
              <WiHorizon className="icon"/>
              <div className="data">
                <span className="phase">Atardecer</span>
                <span className="time">{data.sunset}</span>
              </div>
            </div>
            <div className="time-ago">
              {getHoursAgo(data.sunset)}
            </div>
          </li>
        </ul>
      </div>
    </>
  );

}

export default Stages;