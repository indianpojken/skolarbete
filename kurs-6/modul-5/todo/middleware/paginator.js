function paginator(database, fallback = { limit: 5 }) {
  return async (request, response) => {
    const { page, limit } = request.query;

    if (page !== undefined) {
      const _limit = limit || fallback.limit;

      const data = await database.find({})
        .sort({ todo: -1 })
        .limit(_limit)
        .skip((page - 1) * _limit);

      response.json(data);
    } else {
      response.json(await database.find({}).sort({ todo: -1 }));
    }
  }
}

export { paginator };
