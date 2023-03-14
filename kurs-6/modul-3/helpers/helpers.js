function validate(scheme) {
  return (request, response, next) => {
    const propertiesExist = Object.keys(scheme).every(
      (key) => key in request.body
    );

    const correctTypes = Object.entries(scheme).every(
      ([key, type]) => typeof (request.body[key]) === type
    );

    if (!propertiesExist) {
      response.status(400).send({
        success: false, error: 'Incorrect request-body.'
      });
    } else if (!correctTypes) {
      response.status(400).send({
        success: false, error: 'Incorrect type(s) for request-body.'
      });
    } else {
      next();
    }
  }
}

function paginator(data, fallback = { limit: 5 }) {
  return (request, response) => {
    const { page, limit } = request.query;

    if (page !== undefined) {
      const _limit = (limit || fallback.limit);
      const start = ((page || 1) - 1) * _limit;
      const end = start + _limit;

      response.send(data.slice(start, end));
    } else {
      response.send(data);
    }
  }
}

export { validate, paginator };
