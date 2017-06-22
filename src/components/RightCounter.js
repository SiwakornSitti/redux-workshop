import React, { Component } from 'react'
import { connect } from 'react-redux'

class RightCounter extends Component {
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

const mapStateToProps = state => ({
  counter: state.counter,
})

export default connect(
  mapStateToProps,
)(RightCounter)
