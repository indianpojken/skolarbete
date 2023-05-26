import { controller } from '../utils/controller.util';

import {
  channelsService,
  messagesService,
  usersService,
} from '../services/mod';

export const all = controller(async (request, response) => {
  const channels = await channelsService.getAllChannels();

  response.status(200).send({
    status: 'success',
    data: {
      channels: channels.map((channel) => ({
        name: channel.name,
        owner: channel.owner.username,
      })),
    },
  });
});

export const create = controller(async (request, response) => {
  const { name } = request.body;
  const owner = response.locals.user.id;

  const channel = await channelsService.createChannel(name, owner);
  await usersService.subscribeToChannel(owner, name);

  response.status(200).send({
    status: 'success',
    data: {
      channel: {
        name: channel.name,
        owner: channel.owner,
      },
    },
  });
});

export const messages = controller(async (request, response) => {
  const { channel } = request.params;

  const messages = await messagesService.getMessagesInChannel(channel);

  response.status(200).send({
    status: 'success',
    data: messages.map((message) => ({
      author: message.author.username,
      text: message.text,
      timestamp: message.createdAt,
    })),
  });
});
