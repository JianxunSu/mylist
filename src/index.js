import React from 'react'
import { render } from 'react-dom'
import { Provider } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'
import { createStore } from '../../../../Library/Caches/typescript/2.9/node_modules/redux'
import {init} from './actions'
import rootReducer from './containers/App'
import App from './containers/App'

const store = createStore(rootReducer)

store.dispatch(init())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)