import AuthContext from './auth-context';
import React, { useState } from 'react';


const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();//miliseconds
	const adjExpirationTime = new Date(expirationTime).getTime();// future

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
}

export const AuthProvider = (props) => {

	//localstorage is synchronous
	const initialToken = localStorage.getItem('token');
	const [token, setToken] = useState(initialToken);
	const userIsLoggedIn = !!token;
	// converts to true or false value
	// if not epmty string true otherwise false

	

	const logoutHandler = () => {
		localStorage.removeItem('token');
		setToken(null);
	};

	const loginHandler = (token, expirationTime) => {
		localStorage.setItem('token', token);
		setToken(token);

		const remainingTime = calculateRemainingTime(expirationTime);
		//logout after time is done
		setTimeout(logoutHandler, remainingTime);
	};

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

