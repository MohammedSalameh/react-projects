import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import React, { useState } from 'react';

function App() {
	const [todoList, setTodoList] = useState<Todo[]>([
		{ id: '1', text: 'Hello' },
		{ id: '2', text: 'World' },
	]);

	const addTodoHandler = (todoText: string) => {
		const newID = todoList.length + 1;
    // setTodoList([...todoList, { id: newID.toString(), text: todoText }]);
    
    setTodoList(prevTodos => {
      return prevTodos.concat({ id: newID.toString(), text: todoText })
    })
	};

	const removeTodoHandler = (todo: Todo) => {
		const newArray = todoList.filter(to => to.id !== todo.id);
		setTodoList(newArray);
	}

	return (
		<div className='App'>
			<NewTodo addTodo={addTodoHandler} />
			<Todos removeTodo={removeTodoHandler} items={todoList} />
		</div>
	);
}

export default App;
