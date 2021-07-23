import { useState, useEffect } from 'react';

// every component that makes use of this
// has its own state
const useCounter = (increment = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (increment) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [increment]);// remember dependency

	// remember to return what is needed
	return counter;
};

export default useCounter;
