import { createContext } from "react";

const initContext = {
  setLocation: (lat: number, lon: number) => { },
  setCurrentWeather: (r?: any) => {},
  handleSelectChange: (e?: any) => {},
  setNewUbication: () => { },
  setSearchValue: () => { },
  getLocation: () => { },
  location: { latitude: 0, longitude: 0 },
  currentWeather: { },
  newUbication: { },
  searchValue: {prev: '', new: ''},
  selectOptions: []
}

export const WeatherAppContext = createContext(initContext);
export const WeatherAppProvider = WeatherAppContext.Provider;