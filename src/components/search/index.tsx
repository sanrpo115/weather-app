import { useEffect, useState } from 'react';
import Select from 'react-select';
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
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  
  // useEffect(() => {
  // }, []);

  const onChange = (event: any) => {
    console.log("change", event)
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
          <Select
              className="basic-single"
              classNamePrefix="select"
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="cities"
              options={selectOptions}
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