import * as usersService from '../services/users.service.js';

function verifyRole(role) {
  return async (request, response, next) => {
    const userID = request.user._id;

    try {
      const user = await usersService.get(userID);

      if (!usersService.hasRole(user, role)) {
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
