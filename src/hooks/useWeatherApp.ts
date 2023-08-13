import { useState } from 'react';

export const useWeatherApp = () => {
  const [location, setLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState();
  const [newUbication, setNewUbication] = useState({});
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: any) => {
    const regex = /^[A-Za-z]+$/;
    let value = event.target.value;
    if (event.target.value !== '') {
      value = value.toUpperCase();
      console.log(value)
    }
  };

  const useAppValue = {
    handle: { setLocation, setCurrentWeather, handleInputChange, setNewUbication, setSearchValue },
    value: { location, currentWeather, newUbication, searchValue }
  }

  return useAppValue ;

}

