import { getUserByID, hasRole } from '../models/users.model.js';

function verifyRole(role) {
  return async (request, response, next) => {
    try {
      const user = await getUserByID(request.user._id);

      if (!hasRole(user, role)) {
        throw new Error('required role is missing');
      }

      next();
    } catch (error) {
      response.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export { verifyRole };
