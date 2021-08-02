import AuthContext from './auth-context';
import React, { useState } from 'react';

export const AuthProvider = (props) => {
	const [token, setToken] = useState(null);
	const userIsLoggedIn = !!token;
	// converts to true or false value
	// if not epmty string true otherwise false

	const loginHandler = (token) => {
		setToken(token);
	};

	const logoutHandler = () => {};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		loginHandler: loginHandler,
		logoutHandler: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

