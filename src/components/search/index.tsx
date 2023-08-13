import { useEffect, useState } from 'react';
import Select from 'react-select';
import AsyncSelect  from 'react-select/async';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import 'moment/locale/es-mx';
import "./styles.scss";
import { useWeatherApp } from '../../hooks/useWeatherApp';
import { handlePreventKeys } from '../../utils/index';

const Search = () => {
  const {  handle: { handleSelectChange }, value: { selectOptions } } = useWeatherApp();

  
  // useEffect(() => {
  // }, []);

  const onChange = (event: any) => {
    console.log("change", event)
  }
  
  const promiseOptions = (inputvalue: string, callback: (options: any) => void) => {
    setTimeout(() => {
      console.log("resolve", selectOptions)
      callback(() => { return selectOptions });
    }, 1000);
  }

  return (
    <>
      <Row>
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