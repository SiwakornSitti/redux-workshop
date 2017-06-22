import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import rootReducer from './reducers/counterReducer'

const store = createStore(rootReducer)

ReactDOM.render(<App />, document.getElementById('root'))
