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
  const note = event.body as unknown as z.infer<
    typeof notesValidation.updateNote
  >;

  const noteId = event.pathParameters?.noteId as string;
  const user = await usersService.getUserById(event.auth.userId);

  await notesService.updateNote(noteId, user.PK, note);

  return createResponse(200, {
    status: 'success',
    data: null,
  });
}

export const handler = middy(lambda)
  .use(jsonBodyParser())
  .use(authorizeMiddleware.authorize())
  .use(validatorMiddleware.validate(notesValidation.updateNote))
  .use(errorsMiddleware.errorHandler());
