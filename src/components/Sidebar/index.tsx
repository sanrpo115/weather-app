import { useContext } from "react";
import { useWeatherApp } from "../../hooks/useWeatherApp";
import { WeatherAppContext } from "../../context/context";

const SideBar = () => {

  const { setCurrentWeather, currentWeather, location } = useContext(WeatherAppContext);

  console.log('location', location);

  return (
    currentWeather && location && <>

    </>
  );

}

export default SideBar;