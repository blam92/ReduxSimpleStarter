import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async';
import reduxThunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(Async, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
