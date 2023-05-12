import { databaseService } from '../services/mod';

export function createAuthor(name: string) {
  databaseService.database
    .prepare(`
      INSERT OR IGNORE INTO authors (name)
      VALUES (@name)
    `)
    .run({ name });
}
