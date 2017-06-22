import React, { Component } from 'react'

class LeftCounter extends Component {
  render() {
    return (
      <div>
        <button className="button is-primary is-outlined" onClick={this.props.decreaseCounter}>-</button>
        <span className="counter-number">{this.props.counter}</span>
        <button className="button is-primary is-outlined" onClick={this.props.increaseCounter}>+</button>
      </div>
    )
  }
}

export default LeftCounter