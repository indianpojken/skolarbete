function validate(validator) {
  return async (request, response, next) => {
    try {
      await validator.validate(request);
      next();
    } catch (error) {
      response.status(400).json({
        success: false, message: error.message
      })
    }
  }
}

export { validate };
