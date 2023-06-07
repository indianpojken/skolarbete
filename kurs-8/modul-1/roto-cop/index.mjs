import joi from 'joi';

import { route, checkRoutes } from './utils/routes.mjs';
import { sendResponse } from './utils/sendResponse.mjs';

import { encrypt, decrypt } from './encrypt.mjs';

const routes = [
  route('POST', '/encrypt', async (body) => {
    const { text, key } = body;

    await joi
      .object({
        text: joi.string().required(),
        key: joi.string().required(),
      })
      .required()
      .validateAsync(body);

    const encodedText = encrypt(text, key);

    return sendResponse(200, {
      status: 'success',
      data: { encodedText },
    });
  }),

  route('POST', '/decrypt', async (body) => {
    const { text, key } = body;

    await joi
      .object({
        text: joi.string().required(),
        key: joi.string().required(),
      })
      .required()
      .validateAsync(body);

    const decodedText = decrypt(text, key);

    return sendResponse(200, {
      status: 'success',
      data: { text: decodedText },
    });
  }),
];

export const handler = async (event) => {
  return await checkRoutes(routes, event);
};
