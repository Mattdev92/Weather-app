const initialState = {
  author: 'unknown',
};
export default function navigationReducer(
  state = initialState,
  action: { type: string }
) {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return { ...state, author: 'Mati' };
    default:
      return state;
  }
}
