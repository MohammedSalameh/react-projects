import AuthContext from './auth-context';
import React, { useState } from 'react';

export const AuthProvider = (props) => {
	
	//localstorage is synchronous
	const initialToken = localStorage.getItem('token');
	const [token, setToken] = useState(initialToken);
	const userIsLoggedIn = !!token;
	// converts to true or false value
	// if not epmty string true otherwise false

	const loginHandler = (token) => {
		localStorage.setItem('token', token);
		setToken(token);
	};

	const logoutHandler = () => {
		localStorage.removeItem('token');
		setToken(null);
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

