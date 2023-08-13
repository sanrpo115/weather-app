import { useEffect, useState } from 'react';
import { helpSendRequest } from '../helpers/helpSendRequest';

export const useWeatherApp = () => {
  const [location, setLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState();
  const [newUbication, setNewUbication] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    if(searchValue.length >= 3) {
      console.log("Buscando");
      consultCities();
    }
  }, [searchValue])

  const handleSelectChange = (event: any) => {
    let newValue = event;
    const regex = /^[A-Za-z\s]*$/; // Expresión regular para letras en mayúsculas, minúsculas y espacios
    if (newValue === '' || regex.test(newValue)) {
      newValue = newValue.toUpperCase();
      console.log(newValue)
      setSearchValue(newValue);
    }
  };

  const consultCities = async () => {
    const options: any = [];
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/search.json?q=${searchValue}` , 
      { 'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_HOST },
      'GET',
      {}
    );
    console.log("Respuesta buscador", response);
    if (response !== null) {
      response.forEach((elm: any) => {
        options.push({key: `${elm.name}, ${elm.region}, ${elm.country}`, value: `${elm.lat}, ${elm.lon}`,})
      });
      console.log('options', options)
      setSelectOptions(options);
    }
  }

  const useAppValue = {
    handle: { setLocation, setCurrentWeather, handleSelectChange, setNewUbication, setSearchValue },
    value: { location, currentWeather, newUbication, searchValue, selectOptions }
  }

  return useAppValue ;

}

