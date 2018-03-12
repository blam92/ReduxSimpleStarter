import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

// const createStoreWithMiddleware = applyMiddleware(Async, reduxThunk)(createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware(Async, reduxThunk)));

const token = localStorage.getItem('JWT');

if(token) {
  createStoreWithMiddleware.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
