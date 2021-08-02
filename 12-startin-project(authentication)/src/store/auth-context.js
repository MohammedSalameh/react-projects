import React from 'react';

const initialAuthState = {
	token: '',
	isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialAuthState);

export default AuthContext;