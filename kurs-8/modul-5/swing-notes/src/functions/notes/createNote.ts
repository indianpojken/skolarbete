import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';

import { z } from 'zod';

import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { createResponse } from '../../utils/response.util.ts';

import { usersService, notesService } from '../../services/mod.ts';

import {
  authorizeMiddleware,
  validatorMiddleware,
  errorsMiddleware,
} from '../../middlewares/mod.ts';

import { notesValidation } from '../../validations/mod.ts';

async function lambda(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  const note = event.body as unknown as z.infer<typeof notesValidation.addNote>;

  await usersService.getUserById(event.auth.userId);
  await notesService.createNote(event.auth.userId, note.title, note.text);

  return createResponse(201, {
    status: 'success',
    data: null,
  });
}

export const handler = middy(lambda)
  .use(jsonBodyParser())
  .use(authorizeMiddleware.authorize())
  .use(validatorMiddleware.validate(notesValidation.addNote))
  .use(errorsMiddleware.errorHandler());
