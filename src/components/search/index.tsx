import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-mx';

const Search = () => {
  
  // useEffect(() => {
  // }, []);

  return (
    <div className='date'>
      <div className='month'>
        <span className="month">{moment().format('MMMM yyyy').toLowerCase()}</span>
      </div>
      <div className='day'>
        {moment().format('dddd DD, hh:mm A').toLowerCase()}
      </div>
    </div>

  );

}

export default Search;