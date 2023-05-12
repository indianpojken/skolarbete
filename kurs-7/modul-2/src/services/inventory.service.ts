import { inventoryModel } from '../models/mod';
import { booksService, storesService } from './mod';

export function addBookToStore(
  storeId: number,
  bookId: number,
  quantity: number
) {
  storesService.getStoreById(storeId);
  booksService.getBookById(bookId);
  inventoryModel.createInventoryItem(storeId, bookId, quantity);
}

export function getInventoryByStoreId(storeId: number) {
  storesService.getStoreById(storeId);
  return inventoryModel.getInventoryByStoreId(storeId);
}
