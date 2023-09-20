import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';

import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { createResponse } from '../../utils/response.util.ts';

import { usersService, notesService } from '../../services/mod.ts';

import {
  authorizeMiddleware,
  errorsMiddleware,
} from '../../middlewares/mod.ts';

async function lambda(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const user = await usersService.getUserById(event.auth.userId);
  const notes = await notesService.findAllNotesByUserId(user.PK);

  return createResponse(200, {
    status: 'success',
    data: { notes: notes.map((note) => notesService.createNoteResponse(note)) },
  });
}

export const handler = middy(lambda)
  .use(jsonBodyParser())
  .use(authorizeMiddleware.authorize())
  .use(errorsMiddleware.errorHandler());
