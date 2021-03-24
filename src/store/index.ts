import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import navigationReducer from 'reducers/navigation-reducer';
import searchBarReducer from 'reducers/searchBar-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  navigationReducer,
  searchBarReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
