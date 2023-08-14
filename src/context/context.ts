import React, { createContext, Dispatch, ReactNode } from "react";
import { useWeatherApp } from "../hooks/useWeatherApp";

const initContext = {
  setLocation: () => {},
  setCurrentWeather: () => {},
  handleSelectChange: () => {},
  setNewUbication: () => { },
  setSearchValue: () => { },
  getLocation: () => { },
  setSelectOptions: () => { },
  setAstronomy: () => {},
  location: { latitude: 0, longitude: 0 },
  currentWeather: { },
  newUbication: '',
  searchValue: {prev: '', new: ''},
  selectOptions: [],
  astronomy: { }
}

interface WeatherApp {
  setLocation: React.Dispatch<React.SetStateAction<{ latitude: number; longitude: number; }>>;
  setCurrentWeather: React.Dispatch<(prevState: undefined) => undefined>;
  setNewUbication: React.Dispatch<React.SetStateAction<''>>;
  setSearchValue: React.Dispatch<React.SetStateAction<{ prev: string; new: string; }>>;
  setSelectOptions: React.Dispatch<React.SetStateAction<any[]>>;
  handleSelectChange: (e: any) => void;
  getLocation: () => any;
  location: any;
  currentWeather: any;
  newUbication: string;
  searchValue: any;
  selectOptions: Array<any>;
}

export const WeatherAppContext = createContext<WeatherApp>(initContext);
export const WeatherAppProvider = WeatherAppContext.Provider;