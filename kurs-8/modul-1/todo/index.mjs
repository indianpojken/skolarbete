import joi from 'joi';

import { route, checkRoutes } from './utils/routes.mjs';
import { sendResponse } from './utils/sendResponse.mjs';

import * as todos from './todos.mjs';

const routes = [
  route('GET', '/', async (body) => {
    return sendResponse(201, {
      status: 'success',
      data: {
        todos: todos.getTodos(),
      },
    });
  }),

  route('POST', '/', async (body) => {
    try {
      const { todo } = body;

      await joi
        .object({ todo: joi.string().required() })
        .required()
        .validateAsync(body);

      const addedTodo = todos.addTodo(todo);

      return sendResponse(200, {
        status: 'success',
        data: { todo: addedTodo },
      });
    } catch (error) {
      return sendResponse(400, {
        status: 'fail',
        data: {
          errors: error.details.map((err) => ({ [err.path]: err.message })),
        },
      });
    }
  }),

  route('PUT', '/', async (body) => {
    try {
      const { id, todo } = body;

      await joi
        .object({
          todo: joi.string().required(),
          id: joi.string().required(),
        })
        .required()
        .validateAsync(body);

      const updateTodo = todos.updateTodo(id, todo);

      return sendResponse(200, {
        status: 'success',
        data: { todo: updateTodo },
      });
    } catch (error) {
      return sendResponse(400, {
        status: 'fail',
        data: {
          errors: error.details.map((err) => ({ [err.path]: err.message })),
        },
      });
    }
  }),

  route('DELETE', '/', async (body) => {
    try {
      const { id } = body;

      await joi
        .object({ id: joi.string().required() })
        .required()
        .validateAsync(body);

      const deletedTodo = todos.deleteTodo(id);

      return sendResponse(200, {
        status: 'success',
        data: { todo: deletedTodo },
      });
    } catch (error) {
      return sendResponse(400, {
        status: 'fail',
        data: {
          errors: error.details.map((err) => ({ [err.path]: err.message })),
        },
      });
    }
  }),
];

export const handler = async (event) => {
  return (
    (await checkRoutes(routes, event)) ??
    sendResponse(500, {
      status: 'error',
      message: 'Internal Server Error',
    })
  );
};
