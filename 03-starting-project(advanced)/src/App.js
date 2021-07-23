import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

// RULES OF HOOKS
// only call react hooks in react functions, custom hooks.
// dont call hooks in nested functions/ifstatements. ALWAYS TOP LEVEL in the component.
// add everything that is needed in useffect as a dependency. set functions doesnt count.

function App() {
	const {isLoggedIn} = useContext(AuthContext);
	return (
		<>
			<MainHeader/>
			<main>
				{!isLoggedIn && <Login  />}
				{isLoggedIn && <Home />}
			</main>
		</>
	);
}

export default App;
