function validate(schema) {
  return async (request, response, next) => {
    try {
      await schema.validate(request.body);
      next();
    } catch (error) {
      response.status(400).json({
        success: false, message: error.message
      })
    }
  }
}

export { validate };
