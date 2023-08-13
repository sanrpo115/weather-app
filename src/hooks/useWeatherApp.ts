import { useEffect, useState } from 'react';
import { helpSendRequest } from '../helpers/helpSendRequest';

export const useWeatherApp = () => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [currentWeather, setCurrentWeather] = useState();
  const [newUbication, setNewUbication] = useState({});
  const [searchValue, setSearchValue] = useState({prev: '', new: ''});
  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    if(searchValue.new.length >= 3 && searchValue.prev !== searchValue.new) {
      setTimeout(() => {
        console.log("Buscando");
        consultCities();
      }, 1000)
    }
  }, [searchValue])

  const handleSelectChange = (event: any) => {
    const oldValue = searchValue.new
    let newValue = event;
    const regex = /^[A-Za-z\s]*$/;
    if (newValue === '' || regex.test(newValue)) {
      newValue = newValue.toUpperCase();
      console.log(newValue)
      setSearchValue({prev: oldValue, new: newValue});
    }
  };

  const getLocation = () => {
		if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
				console.log("Geolocation successfully :::>> ", position.coords)
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
	}

  const consultCities = async () => {
    const options: any = [];
    const response = await helpSendRequest(
      `${process.env.REACT_APP_ENDPOINT}/search.json?q=${searchValue.new}` , 
      { 'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_HOST },
      'GET',
      {}
    );
    console.log("Respuesta buscador", response);
    if (response !== null) {
      response.forEach((elm: any) => {
        options.push({label: `${elm.name}, ${elm.region}, ${elm.country}`, value: `${elm.lat}, ${elm.lon}`,})
      });
      console.log('options', options)
      setSelectOptions(options);
    }
  }

  const useAppValue = {
    handle: { setLocation, setCurrentWeather, handleSelectChange, setNewUbication, setSearchValue, getLocation },
    value: { location, currentWeather, newUbication, searchValue, selectOptions }
  }

  return useAppValue ;

}

