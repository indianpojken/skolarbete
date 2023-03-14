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

function paginate(data, page, limit) {
  const start = ((page || 1) - 1) * limit;
  const end = start + limit;

  return data.slice(start, end);
}

export { validateBody, paginate };
