import React, { Component } from 'react'
import LeftCounter from './LeftCounter'
import RightCounter from './RightCounter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
    this.increaseCounter = this.increaseCounter.bind(this)
    this.decreaseCounter = this.decreaseCounter.bind(this)
  }

  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decreaseCounter() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div className="container section">
        <h1 className="title">Redux Workshop</h1>
        <div className="columns">
          <div className="column">
            <h2 className="subtitle">Left Counter</h2>
            <LeftCounter
              counter={this.state.counter}
              increaseCounter={this.increaseCounter}
              decreaseCounter={this.decreaseCounter}
            />
          </div>
          <div className="column">
            <h2 className="subtitle">Right Counter</h2>
            <RightCounter
              counter={this.state.counter}
              increaseCounter={this.increaseCounter}
              decreaseCounter={this.decreaseCounter}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App