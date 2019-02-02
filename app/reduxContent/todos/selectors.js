import { createSelector } from 'reselect';

export const getTodos = state => state.todos;
export const getTodosList = createSelector(getTodos, todos => todos.get('list'));