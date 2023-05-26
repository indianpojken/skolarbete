import { ApiError } from '../errors/api.error';

import { usersService } from './mod';
import { channelsService } from './mod';

import { messageModel } from '../models/message.model';
import { User } from '../models/user.model';

export async function getMessagesInChannel(channelName: string) {
  const channel = await channelsService.getChannelByName(channelName);

  return await messageModel
    .find({
      channels: {
        $elemMatch: { $eq: channel.id },
      },
    })
    .populate<{ author: User }>('author')
    .sort({ createdAt: -1 });
}

export async function postMessage(
  userId: string,
  text: string,
  channels: string[]
) {
  const user = await usersService.getUserById(userId);

  const targets = await Promise.all(
    channels.map(async (targetChannel) => {
      const channel = await channelsService.getChannelByName(targetChannel);

      if (!(await usersService.isUserSubscribed(user.id, targetChannel))) {
        throw new ApiError(400, {
          message: `User is not subscribed to channel: '${channel.name}'`,
        });
      }

      return channel.id;
    })
  );

  return await messageModel.create({
    author: user.id,
    text,
    channels: targets,
  });
}
