import React, { useReducer } from 'react';

const initialState = {
	value: '',
	isTouched: false,
};

const inputStateReducer = (prevState, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: prevState.isTouched };
	}

	if (action.type === 'BLUR') {
		return { value: prevState.value, isTouched: true };
	}

	if (action.type === 'reset') {
		return { value: '', isTouched: false}
	}

	return {
		value: '',
		isTouched: false,
	};
};

const useInput2 = (validateInput) => {
	const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

	const valueIsValid = validateInput(inputState.value);
	const valueHasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = (event) => {
		dispatch({ type: 'INPUT', value: event.target.value });
	};

	const inputBlurHandler = () => {
		dispatch({ type: 'BLUR' });
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};

	return {
		enteredValue: inputState.value,
		valueIsValid,
		valueHasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput2;
