import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (request, response, next) => {
  const text = (request.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  
  return response.status(201).json({ message: 'Created the todo', createdTodo: newTodo });
};