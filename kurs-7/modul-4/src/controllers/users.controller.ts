import { controller } from '../utils/controller.util';

import { usersService, messagesService } from '../services/mod';

export const login = controller(async (request, response) => {
  const { username, password } = request.body;

  const { user, token } = await usersService.loginUser(username, password);

  response
    .status(200)
    .cookie('token', token, { httpOnly: true, secure: true })
    .send({
      status: 'success',
      data: {
        user: {
          id: user.id,
          username: user.username,
        },
      },
    });
});

export const register = controller(async (request, response) => {
  const { username, password } = request.body;

  const user = await usersService.registerUser(username, password);

  response.status(201).send({
    status: 'success',
    data: {
      user: {
        id: user.id,
        username: user.username,
      },
    },
  });
});

export const info = controller(async (request, response) => {
  const { id } = response.locals.user;

  const user = await usersService.getUserById(id);

  response.status(200).send({
    status: 'success',
    data: {
      user: {
        id: user.id,
        username: user.username,
        subscriptions: user.subscriptions.map((channel) => channel.name),
      },
    },
  });
});

export const subscribe = controller(async (request, response) => {
  const { id } = response.locals.user;
  const { channelName } = request.params;

  await usersService.subscribeToChannel(id, channelName);

  response.status(201).send({
    status: 'success',
    data: null,
  });
});

export const postMessage = controller(async (request, response) => {
  const { id } = response.locals.user;
  const { text, channels } = request.body;

  const message = await messagesService.postMessage(id, text, channels);

  response.status(201).send({
    status: 'success',
    data: null,
  });
});
