import AsyncSelect  from 'react-select/async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import 'moment/locale/es-mx';
import "./styles.scss";
import { WeatherAppContext } from '../../context/context';
import { useContext } from 'react';

const Search = () => {
  const { handleSelectChange, selectOptions } = useContext(WeatherAppContext);
  
  const promiseOptions = (_: any, callback: (options: any) => void) => {
    setTimeout(() => {
      console.log("resolve", selectOptions)
      callback(() => { return selectOptions });
    }, 1000);
  }

  return (
    <>
      <Row className='top-bar'>
        <Col>
          <div className='date'>
            <div className='month'>
              <span className="month">{moment().format('MMMM yyyy').toLowerCase()}</span>
            </div>
            <div className='day'>
              <p>{moment().format('dddd DD').toLowerCase()}</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className='inputField'>
            <AsyncSelect 
              className="basic-single"
              classNamePrefix="select"
              placeholder="Buscar ubicación"
              isClearable={true}
              isSearchable={true}
              name="cities"
              loadOptions={promiseOptions}
              onInputChange={(e:any) => {  
                handleSelectChange(e)}
              }
            />
          </div>
        </Col>
      </Row>
    </>

  );

}

export default Search;