import { validKey } from '../models/staff.model.js';
import { apiKeySchema } from '../schemas/api-key.schema.js';

async function authorize(request, response, next) {
  const apiKey = request.headers['api-key'];

  try {
    await apiKeySchema.validate(request.headers);

    if (await validKey(apiKey)) {
      next();
    } else {
      throw new Error('invalid api-key');
    }
  } catch (error) {
    response.status(401).json({
      success: false, message: error.message
    });
  }
}

export { authorize };
