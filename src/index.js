import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {init} from './actions'
import rootReducer from './reducers'
import App from './containers/App'
import thunk from 'redux-thunk'
import data from './api/items.json'

const middleware = [ thunk ];
const store = createStore(
  rootReducer, 
  // data
  applyMiddleware(...middleware)
)

store.dispatch(init())
// setTimeout(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  ) 
// }, 1000);
console.error("something")
console.error(store.getState())

