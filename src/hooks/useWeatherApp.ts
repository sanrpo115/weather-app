import { useState } from 'react';

export const useWeatherApp = () => {
  const [location, setLocation] = useState({});

  const useAppValue = {
    handle: { setLocation },
    value: { location}
  }

  return useAppValue ;

}

