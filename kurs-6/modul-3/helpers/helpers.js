function validate(scheme) {
  return (request, response, next) => {
    const errors = [];

    Object.entries(scheme).forEach(([key, type]) => {
      const itemType = typeof (request.body[key]);

      if (!(key in request.body)) {
        errors.push(`'${key}' was not found in request-body`);
      } else if (itemType !== type) {
        errors.push(`'${key}' is type '${itemType}', expected '${type}'`);
      }
    });

    if (errors.length) {
      response.status(400).send({ success: false, errors });
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
