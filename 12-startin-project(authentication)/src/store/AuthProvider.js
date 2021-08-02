import AuthContext from './auth-context';
import React, { useState, useEffect, useCallback } from 'react';

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime(); //miliseconds
	const adjExpirationTime = new Date(expirationTime).getTime(); // future

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

let logoutTimer;

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem('token');
	const storedExpirationData = localStorage.getItem('expirationTime');

	const remainingTime = calculateRemainingTime(storedExpirationData);

	if (remainingTime <= 60000) {
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');
		return null;
	}

	return { token: storedToken, remainingTime };
};

export const AuthProvider = (props) => {
	//localstorage is synchronous
	const tokenData = retrieveStoredToken();
	let initialToken;
	if (tokenData) {
		initialToken = tokenData.token;
	}

	const [token, setToken] = useState(initialToken);

	const userIsLoggedIn = !!token;
	// converts to true or false value
	// if string true otherwise false

	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');

		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);

	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem('token', token);
		localStorage.setItem('expirationTime', expirationTime);

		const remainingTime = calculateRemainingTime(expirationTime);
		//logout after time is done
		logoutTimer = setTimeout(logoutHandler, remainingTime);
	};

	useEffect(() => {
		if (tokenData) {
			console.log(tokenData.remainingTime);
			logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime);
		}
	}, [tokenData, logoutHandler]);

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};
