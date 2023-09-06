import { database } from './database.service.ts';

import { ApiError } from '../errors/api.error.ts';

export async function getAllEvents() {
  const { Items: events } = await database
    .scan({
      TableName: 'events',
    })
    .promise();

  return events;
}

export async function getEventById(id: number) {
  const { Item: event } = await database
    .get({
      TableName: 'events',
      Key: { id },
    })
    .promise();

  if (event) {
    return event;
  } else {
    throw new ApiError(404, {
      message: `No event with the id: '${id}' was found`,
    });
  }
}

export async function reduceTickets(id: number) {
  await getEventById(id);

  // https://www.alexdebrie.com/posts/dynamodb-condition-expressions/#3-enforcing-business-rules
  try {
    return await database
      .update({
        TableName: 'events',
        Key: { id },
        ConditionExpression: 'tickets > :zero',
        UpdateExpression: 'SET tickets = tickets - :one',
        ExpressionAttributeValues: {
          ':zero': 0,
          ':one': 1,
        },
      })
      .promise();
  } catch (error) {
    throw new ApiError(404, {
      message: `Event with the id: '${id}' has no tickets left`,
    });
  }
}
