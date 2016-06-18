import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ChainedSelectContainer from './containers/ChainedSelectContainer'
import createSelectsArray from './reducers'

let store = createStore(createSelectsArray)

render(
  <Provider store={store}>
    <ChainedSelectContainer />
  </Provider>,
  document.getElementById('root')
)
