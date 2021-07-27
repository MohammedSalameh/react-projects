import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter'
import authReducer from './auth'

//WITH VANILLA REDUX
// const counterReducer = (state = initialCounterState, action) => {
// 	// any of the return statements will OVERRIDE the current state
// 	// WILL NOT MERGE.
// 	switch (action.type) {
// 		case 'increment':
// 			return { counter: state.counter + 1, showCounter: state.showCounter };
// 		case 'decrement':
// 			return { counter: state.counter - 1, showCounter: state.showCounter };
// 		case 'increase':
// 			return {
// 				counter: state.counter + action.amount,
// 				showCounter: state.showCounter,
// 			};
// 		case 'toggleCounter':
// 			return { counter: state.counter, showCounter: !state.showCounter };
// 		default:
// 			return state;
// 	}
// };

//Connecting redux toolkit to store
// const vanillaStore = createStore(counterReducer);

const toolkitStore = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});


export default toolkitStore;
