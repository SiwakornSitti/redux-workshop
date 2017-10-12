import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter, addCounter } from "../actions/counter";

class LeftCounter extends Component {
  render() {
    // const { counter } = this.props
    return (
      <div>
        <button
          className="button is-primary is-outlined"
          onClick={this.props.decreaseCounter}
        >
          -
        </button>
        <span className="counter-number">{this.props.counter}</span>
        <button
          className="button is-primary is-outlined"
          onClick={this.props.increaseCounter}
        >
          +
        </button>
        <button
          className="button is-primary is-outlined"
          onClick={(event) => this.props.addCounter(5)}
        >
          5
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
  addCounter: num => dispatch(addCounter(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftCounter);
