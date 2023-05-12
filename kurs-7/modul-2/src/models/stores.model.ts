import { databaseService } from '../services/mod';

export interface Store {
  id: number,
  name: string,
}

export function createStore(name: string) {
  databaseService.database
    .prepare(`
      INSERT INTO stores (name)
      VALUES (@name)
    `)
    .run({ name });
}

export function getStoreById(id: number): Store {
  return databaseService.database
    .prepare(`
      SELECT id, name FROM stores
      WHERE id = @id
    `)
    .get({ id }) as Store;
}

export function getStoreByName(name: string): Store {
  return databaseService.database
    .prepare(`
      SELECT id, name FROM stores
      WHERE name = @name
    `)
    .get({ name }) as Store;
}
