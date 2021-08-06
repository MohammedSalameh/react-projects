import { title } from 'process';
import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

interface Props {
	items: Todo[];
}

const Todos: React.FC<Props> = (props) => {
	return (
		<ul>
			{props.items.map((item) => {
				return <TodoItem key={item.id} item={item}/>;
			})}
		</ul>
	);
};


export default Todos;
