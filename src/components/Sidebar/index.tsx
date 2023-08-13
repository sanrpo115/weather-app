import { useWeatherApp } from "../../hooks/useWeatherApp";

const SideBar = () => {

  const { handle: { setCurrentWeather }, value: { currentWeather, location } } = useWeatherApp();

  console.log('location', location);

  return (
    currentWeather && location && <>

    </>
  );

}

export default SideBar;