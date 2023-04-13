import { isValidKey } from '../models/staff.model.js';

import { validate } from './validate.middleware.js';

import { apiKeySchema } from '../schemas/api-key.schema.js';

async function authorize(request, response, next) {
  const apiKey = request.headers['api-key'];

  validate(apiKeySchema)(request, response, async () => {
    try {
      if (await isValidKey(apiKey)) {
        next();
      } else {
        throw new Error('invalid api-key');
      }
    } catch (error) {
      response.status(401).json({
        success: false, message: error.message
      });
    }
  })
}

export { authorize };
