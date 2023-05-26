import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { ApiError } from '../errors/api.error';

import { userModel } from '../models/user.model';
import { Channel } from '../models/channel.model';

import { getChannelByName } from './channels.service';

function generateToken(id: string) {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30m',
  });
}

export async function getUserById(id: string) {
  const user = await userModel
    .findOne({ _id: id })
    .populate<{ subscriptions: Channel[] }>('subscriptions')
    .orFail(
      new ApiError(404, {
        message: `No user with the id: '${id}' was found`,
      })
    );

  return user;
}

export async function getUserByUsername(username: string) {
  const user = await userModel
    .findOne({ username })
    .populate<{ subscriptions: Channel[] }>('subscriptions')
    .orFail(
      new ApiError(404, {
        message: `No user with the username: '${username}' was found`,
      })
    );

  return user;
}

export async function registerUser(username: string, password: string) {
  const user = await getUserByUsername(username).catch(() => {});

  if (!user) {
    return await userModel.create({
      username,
      password: await bcrypt.hash(password, 10),
    });
  } else {
    throw new ApiError(409, { message: 'Username already in use' });
  }
}

export async function loginUser(username: string, password: string) {
  const user = await getUserByUsername(username);

  if (await bcrypt.compare(password, user.password)) {
    return {
      user,
      token: generateToken(user.id),
    };
  } else {
    throw new ApiError(401, { message: 'Incorrect password' });
  }
}

export async function isUserSubscribed(userId: string, channelName: string) {
  const user = await getUserById(userId);

  return user.subscriptions.some(
    (subsciption) => subsciption.name === channelName
  );
}

export async function subscribeToChannel(userId: string, channelName: string) {
  const user = await getUserById(userId);
  const channel = await getChannelByName(channelName);

  if (!(await isUserSubscribed(user.id, channelName))) {
    await userModel.updateOne(
      { _id: user.id },
      { $push: { subscriptions: channel.id } }
    );
  } else {
    throw new ApiError(409, {
      message: `User is already subscribed to channel: '${channelName}' was found`,
    });
  }
}
