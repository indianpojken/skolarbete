import { databaseService } from '../services/mod';

interface InventoryItem {
  isbn: string,
  quantity: number,
}

export function createInventoryItem(
  storeId: number,
  bookId: number,
  quantity: number
) {
  databaseService.database
    .prepare(`
      INSERT INTO inventory (storeId, bookId, quantity)
      VALUES (@storeId, @bookId, @quantity)
    `)
    .run({ storeId, bookId, quantity });
}

export function getInventoryByStoreId(storeId: number): InventoryItem[] {
  return databaseService.database
    .prepare(`
      SELECT books.isbn, inventory.quantity
      FROM inventory
      JOIN books ON inventory.bookId = books.id
      JOIN stores ON inventory.storeId = stores.id
    `)
    .all({ storeId }) as InventoryItem[];
}
