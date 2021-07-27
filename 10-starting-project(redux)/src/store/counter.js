import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++; // only allowed in toolkit
		},
		decrement(state) {
			state.counter--;
			// mutating state directly is allowed with toolkit,
			// behind the scene it takes care of it, by copying
			// and merging new with old state
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
