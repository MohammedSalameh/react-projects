import React, { PropsWithChildren, useState } from 'react';
import Todo from '../models/todo';
import { TodosContext, TodosContextType } from './todos-context';

const TodosContextProvider: React.FC = ({ children }) => {
	const [todos, setTodosList] = useState<Todo[]>([
		{ id: '1', text: 'Hello' },
		{ id: '2', text: 'World' },
	]);

	const addTodoHandler = (todoText: string) => {
		const newID = todos.length + 1;
		// setTodoList([...todoList, { id: newID.toString(), text: todoText }]);
		setTodosList((todos) => [
			...todos,
			{ id: newID.toString(), text: todoText },
		]);
	};

	const removeTodoHandler = (todo: Todo) => {
		const newArray = todos.filter((to) => to.id !== todo.id);
		setTodosList(newArray);
	};

	const contextValue: TodosContextType = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
