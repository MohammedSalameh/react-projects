import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

interface Props {
	item: Todo;
	removeTodo: () => void;
}

const TodoItem = ({ item, removeTodo }: Props) => {
	return (
		<>
			<li onClick={removeTodo} className={classes.item}>
				{item.text}
			</li>
		</>
	);
};

export default TodoItem;
