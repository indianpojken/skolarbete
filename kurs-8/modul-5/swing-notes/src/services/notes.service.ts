import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

import { database } from './database.service.ts';
import { ApiError } from '../errors/api.error.ts';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export interface Note {
  PK: string;
  SK: string;
  text: string;
  title: string;
  createdAt: string;
  modifiedAt: string;
}

export async function createNote(userId: string, title: string, text: string) {
  await database
    .put({
      TableName: process.env.TABLE_NAME as string,
      Item: {
        PK: userId,
        SK: `note#${nanoid()}`,
        title,
        text,
        createdAt: dayjs().format(dateFormat),
        modifiedAt: '',
      },
    })
    .promise();
}

export async function updateNote(
  noteId: string,
  userId: string,
  note: Pick<Note, 'text' | 'title'>
) {
  await getNoteById(noteId, userId);

  return await database
    .update({
      TableName: process.env.TABLE_NAME as string,
      Key: {
        PK: userId,
        SK: `note#${noteId}`,
      },
      UpdateExpression:
        'set title = :title, #text = :text, modifiedAt = :modifiedAt',
      ExpressionAttributeNames: { '#text': 'text' },
      ExpressionAttributeValues: {
        ':title': note.title,
        ':text': note.text,
        ':modifiedAt': dayjs().format(dateFormat),
      },
    })
    .promise();
}

export async function getNoteById(noteId: string, userId: string) {
  const { Item: note } = await database
    .get({
      TableName: process.env.TABLE_NAME as string,
      Key: {
        PK: userId,
        SK: `note#${noteId}`,
      },
    })
    .promise();

  if (note) {
    return note as Note;
  } else {
    throw new ApiError(404, {
      message: `No note with the id: '${noteId}' was found`,
    });
  }
}

export async function findAllNotesByUserId(userId: string) {
  const { Items: notes } = await database
    .query({
      TableName: process.env.TABLE_NAME as string,
      KeyConditionExpression: 'PK = :userId AND begins_with(SK, :prefix)',
      ExpressionAttributeValues: {
        ':userId': userId,
        ':prefix': 'note#',
      },
    })
    .promise();

  return notes as Note[];
}

export async function deleteNoteById(noteId: string, userId: string) {
  const note = await getNoteById(noteId, userId);

  await database
    .delete({
      TableName: process.env.TABLE_NAME as string,
      Key: {
        PK: note.PK,
        SK: note.SK,
      },
    })
    .promise();

  return note as Note;
}

export function createNoteResponse(note: Note) {
  return {
    id: note.SK.replace('note#', ''),
    title: note.title,
    text: note.text,
    createdAt: note.createdAt,
    ...(note.modifiedAt ? { modifiedAt: note.modifiedAt } : {}),
  };
}
