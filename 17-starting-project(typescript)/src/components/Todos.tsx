import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => {
				return (
					<TodoItem
						key={item.id}
						item={item}
						removeTodo={todosCtx.removeTodo.bind(null, item)}
					/>
				);
			})}
		</ul>
	);
};

export default Todos;
