import joi from 'joi';

import { route, checkRoutes } from './utils/routes.mjs';
import { sendResponse } from './utils/sendResponse.mjs';

import { encrypt, decrypt } from './encrypt.mjs';

const routes = [
  route('POST', '/encrypt', async (body) => {
    try {
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
    } catch (error) {
      return sendResponse(400, {
        status: 'fail',
        data: {
          errors: error.details.map((err) => ({ [err.path]: err.message })),
        },
      });
    }
  }),

  route('POST', '/decrypt', async (body) => {
    try {
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
