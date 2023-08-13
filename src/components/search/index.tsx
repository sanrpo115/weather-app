import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import 'moment/locale/es-mx';
import "./styles.scss";
import { useWeatherApp } from '../../hooks/useWeatherApp';
import { handlePreventKeys } from '../../utils/index';

const Search = () => {

  const {  handle: { handleInputChange } } = useWeatherApp();
  
  // useEffect(() => {
  // }, []);

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
            <Form.Control
              type="text"
              id="searchInput"
              aria-describedby="Search Field"
              placeholder="Buscar ubicación"
              onChange={handleInputChange}
            />
            
          </div>
        </Col>
      </Row>
    </>

  );

}

export default Search;