function validateBody(scheme) {
  return (request, response, next) => {
    const propertiesExist = Object.keys(scheme).every((key) => key in request.body);

    if (propertiesExist) {
      const matchingTypes = Object.keys(scheme)
        .every((key) => typeof (request.body[key]) === scheme[key]);

      if (matchingTypes) {
        next();
      } else {
        response.status(400).send({
          success: false, error: 'Incorrect types for request-body.'
        });
      }
    } else {
      response.status(400).send({
        success: false, error: 'Incorrect request-body.'
      });
    }
  }
}

function paginator(data, options = { limit: 5 }) {
  return (request, response) => {
    const { page, limit } = request.query;

    if (page !== undefined) {
      const _limit = (limit || options.limit);
      const start = ((page || 1) - 1) * _limit;
      const end = start + _limit;

      response.send(data.slice(start, end));
    } else {
      response.send(data);
    }
  }
}

export { validateBody, paginator };
