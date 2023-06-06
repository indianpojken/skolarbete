import { nanoid } from 'nanoid';

const todos = [];

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  const createdAt = new Date().toLocaleDateString();
  const todoToAdd = { id: nanoid(), todo, createdAt };

  todos.unshift(todoToAdd);

  return todoToAdd;
}

export function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  const deletedTodo = todos.splice(index, 1);

  return deletedTodo;
}

export function updateTodo(id, todo) {
  const foundTodo = todos.find((t) => t.id === id);
  foundTodo.todo = todo;

  return foundTodo;
}
