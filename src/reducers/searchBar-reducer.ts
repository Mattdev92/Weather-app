export const initialState = {
  city: 'Warsaw',
};

export default function searchBarReducer(
  state = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case 'SET_CITY_NAME':
      return { ...state, city: action.payload.city };
    default:
      return state;
  }
}
