import React, { useState } from 'react'


const Greeting = () => {
  const [changedText, setChangeText] = useState(false);


  const changeTextHandler = () => {
    setChangeText(true)
  }
	return (
		<div>
			<h2>Hello world</h2>
			{!changedText && <p>It's good to see you</p>}
			{changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change Text</button>
		</div>
	);
};

export default Greeting;
