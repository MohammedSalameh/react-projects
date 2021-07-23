import React, { useState, useCallback } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
	console.log('APP RUNNING');
	const [showP, setShowP] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	// usecallback allows us to save a function,
	// and that it shouldnt be recreated on each execution
	// wrap the function with usecallback

  // recreate the function by passing props/state 
  // inside the dependency array
	const clickHandler = useCallback(() => {
		if (allowToggle) {
			setShowP((prevShowP) => !prevShowP);
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(state => !state);
	};

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={showP} />
			<Button onClick={allowToggleHandler}>Allow Toggling</Button>
			{allowToggle && <Button onClick={clickHandler}>Toggle Paragraph</Button>}
		</div>
	);
}

export default App;
