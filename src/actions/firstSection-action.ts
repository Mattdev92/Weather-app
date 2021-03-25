export const setCoord = (coord: { lat: number; lon: number }) => ({
  type: 'SET_COORD',
  payload: { coord },
});
export const showForecast = () => ({
  type: 'SHOW_FORECAST',
});
