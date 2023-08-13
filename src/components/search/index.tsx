import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-mx';


const Search = () => {
  const [date, setDate] = useState(moment(new Date).format('MMMM, dddd DD, yyyy'));
  
  useEffect(() => {
    console.log(date)
  }, []);

  return (
    <>
      Fecha y Buscador
    </>
  );

}

export default Search;