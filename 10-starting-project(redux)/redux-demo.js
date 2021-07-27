const redux = require("redux");

// 2. Reducer function (NO HTTP REQUESTS, PUURE FUNCTION)
// Inputs: Old State + Dispatched Action
// Outputs: New State Object
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return {
        state
      };
  }
};

// 1. Create redux store
const store = redux.createStore(counterReducer);

// 3. Subscriber to the store
const counterSubscriber = () => {
  const latestState = store.getState(); // give us latest state after an update
  console.log(latestState);
};

// 4. subscribe the function
store.subscribe(counterSubscriber);

// 5. Dispatch action
// {type: 'IDENTIFIER', payload: OPTIONAL}
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
