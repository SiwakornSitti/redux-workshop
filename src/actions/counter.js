import { INCREASE_COUNTER, DECREASE_COUNTER } from "../constants/actiontypes";

const increaseCounter = () => ({
  type: INCREASE_COUNTER
});

const decreaseCounter = () => ({
  type: DECREASE_COUNTER
});

const increaseCounterAsync = () => 
(dispatch, getState) => {
  setTimeout(dispatch(increaseCounter),1000);
};



const addCounter = num => ({
  type: "ADD_COUNTER",
  num,
  age: 5
});

export { increaseCounter, decreaseCounter, addCounter };
