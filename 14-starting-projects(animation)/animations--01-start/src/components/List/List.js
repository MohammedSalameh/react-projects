import React, { Component, useState } from 'react';

import './List.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
//Check commit message
const List = () => {
	const [items, setItems] = useState([1, 2, 3]);

	const addItemHandler = () => {
		setItems((prevState) => [...prevState, prevState.length + 1]);
	};

	const removeItemHandler = (index) => {
		const newList = items.filter((item, ind) => ind !== index);
		setItems(newList);
	};

	const listItems = items.map((item, index) => {
		return (
			<CSSTransition key={index} classNames='fade' timeout={300}>
				<li
					className='ListItem'
					onClick={() => removeItemHandler(index)}
				>
					{item}
				</li>
			</CSSTransition>
		);
	});

	return (
		<div>
			<button className='Button' onClick={addItemHandler}>
				Add Item
			</button>
			<p>Click Item to Remove.</p>
			<TransitionGroup className='List' component='ul'>
				{listItems}
			</TransitionGroup>
		</div>
	);
};

export default List;
