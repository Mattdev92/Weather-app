export const initialState = {
  coord: { lat: 52.2298, lon: 21.0118 },
  forecast: false,
};

export default function firstSectionReducer(
  state = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case 'SET_COORD':
      return {
        ...state,
        coord: {
          lat: action.payload.coord.lat,
          lon: action.payload.coord.lon,
        },
      };
    case 'SHOW_FORECAST':
      return {
        ...state,
        forecast: !state.forecast,
      };
    default:
      return state;
  }
}
