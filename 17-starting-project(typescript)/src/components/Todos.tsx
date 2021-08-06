import { title } from 'process';
import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
interface Props {
	items: Todo[];
	removeTodo: (item: Todo) => void;
}

const Todos: React.FC<Props> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => {
				return <TodoItem removeTodo={props.removeTodo.bind(null, item)} key={item.id} item={item}/>;
			})}
		</ul>
	);
};


export default Todos;
