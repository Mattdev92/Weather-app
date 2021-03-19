import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import navigationReducer from 'reducers/navigation-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  navigationReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
