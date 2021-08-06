import React, { useState, createContext } from 'react';

import Todo from '../models/todo';

export type TodosContextType = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (item: Todo) => void;
};

const initialState: TodosContextType = {
	items: [],
	addTodo: (text: string) => {},
	removeTodo: (item: Todo) => {},
};

export const TodosContext = createContext<TodosContextType>(initialState);

