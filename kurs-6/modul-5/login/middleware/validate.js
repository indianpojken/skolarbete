function verifyScheme(scheme, data, options = { maybe: false }, errorHandler) {
  Object.keys(scheme).forEach((key) => {
    const requirement = scheme[key];
    const item = data[key];

    const isRequirement = ['type', 'condition']
      .some((property) => Object.hasOwn(requirement, property));

    if (!isRequirement) {
      verifyScheme(requirement, item, options, errorHandler);
    } else {
      const type = Array.isArray(item) ? 'array' : typeof item;

      const requirements = {
        property: Object.hasOwn(data, key),
        type: Object.hasOwn(requirement, 'type'),
        condition: Object.hasOwn(requirement, 'condition'),
      };

      const isMaybe = requirements.property && options.maybe;

      if (!options.maybe || isMaybe) {
        if (!requirements.property) {
          errorHandler(`'${key}' was not found in request`);
        } else if (requirements.type && type !== requirement.type) {
          errorHandler(`'${key}' is type '${type}', expected '${requirement.type}'`);
        } else if (requirements.condition) {
          if (!requirement.condition(item)) {
            errorHandler(`'${key}' does not pass its required condition'`);
          }
        }
      }
    }
  });
}

function validate(scheme, options) {
  return (request, response, next) => {
    const errors = [];

    verifyScheme(scheme, request, options, (error) => {
      errors.push(error);
    });

    if (errors.length) {
      response.status(400).json({ success: false, errors });
    } else {
      next();
    }
  }
}

export { validate };
