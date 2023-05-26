import { ApiError } from '../errors/api.error';

import { channelModel } from '../models/channel.model';
import { User } from '../models/user.model';

export async function createChannel(name: string, owner: string) {
  const channel = await channelModel.findOne({ name });

  if (!channel) {
    return await channelModel.create({ name, owner });
  } else {
    throw new ApiError(409, { message: 'Channel name already in use' });
  }
}

export async function getAllChannels() {
  return await channelModel.find().populate<{ owner: User }>('owner');
}

export async function getChannelByName(name: string) {
  return await channelModel
    .findOne({ name })
    .populate<{ owner: User }>('owner')
    .orFail(
      new ApiError(404, {
        message: `No channel with the name: '${name}' was found`,
      })
    );
}
