import React, { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
	//only interested in setState
	const setState = useState(globalState)[1];

	const dispatch = (actionIdentifier, payload) => {
		const newState = actions[actionIdentifier](globalState, payload);

		//update the state with the newstate
		globalState = { ...globalState, ...newState };

		//notify listeners
		for (const listener of listeners) {
			listener(globalState);
		}
	};

	useEffect(() => {
		if (shouldListen) {
			//add components that want to listen
			listeners.push(setState);
		}

		return () => {
			if (shouldListen) {
				// remove listener when component gets removed.
				listeners = listeners.filter((li) => li !== setState);
			}
		};
	}, [setState, shouldListen]);

	// just like useReducer returns
	return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
	if (initialState) {
		globalState = { ...globalState, ...initialState };
	}

	actions = { ...actions, ...userActions };
};
