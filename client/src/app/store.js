import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const initialStore = [];

const middleware = [thunk];

const store = createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
