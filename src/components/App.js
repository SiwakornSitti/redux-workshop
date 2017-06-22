import React, { Component } from 'react'
import LeftCounter from './LeftCounter'
import RightCounter from './RightCounter'

class App extends Component {
  render() {
    return (
      <div className="container section">
        <h1 className="title">Redux Workshop</h1>
        <div className="columns">
          <div className="column">
            <h2 className="subtitle">Left Counter</h2>
            <LeftCounter />
          </div>
          <div className="column">
            <h2 className="subtitle">Right Counter</h2>
            <RightCounter />
          </div>
        </div>
      </div>
    )
  }
}

export default App