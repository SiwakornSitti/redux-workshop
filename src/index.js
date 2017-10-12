import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const logger = store => next => action => { 
  console.group('Logger');
  console.log('state', store.getState())
  console.groupEnd();
  next(action)
};

const middleswares = [thunk, logger]
const store = createStore(rootReducer, applyMiddleware(...middleswares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))

