import React from 'react';
import Todo from '../models/todo';

interface Props {
	item: Todo;
}

const TodoItem = ({item}: Props) => {

	return (
		<>
			<li>{item.text}</li>
		</>
	);
};

export default TodoItem;
