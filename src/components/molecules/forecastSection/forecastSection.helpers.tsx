import axios from 'axios';
import { Weather } from 'components/molecules/forecastSection/forecastSection.types';

export const getDatailWeather = ({ setDetails, lon, lat }: Weather): void => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=curently,minutely,hourly&appid=${process.env.REACT_APP_API_KEY}
        `
    )
    .then(({ data }) => {
      setDetails(data);
    })
    .catch((error) => console.log(error));
};

export const makeNextDayList = (day: number, week: string[]): any[] => {
  let newDayList = [];
  let j = 0;
  for (let i = day; i < 7; i++) {
    newDayList[j] = week[i];
    j++;
  }
  if (newDayList.length < 6) {
    const count = 7 - newDayList.length;
    for (let i = 0; i < count; i++) {
      newDayList[j] = week[i];
      j++;
    }
  }
  return newDayList;
};
