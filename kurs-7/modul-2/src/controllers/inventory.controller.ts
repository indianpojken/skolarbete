import { controller } from '../utils/controller.util';
import { inventoryService, booksService } from '../services/mod';

export const addBookToInventory = controller((request, response) => {
  const storeId = Number(request.params.storeId);
  const { bookId, quantity } = request.body;

  inventoryService.addBookToStore(storeId, bookId, quantity);

  response.status(201).send({
    status: 'success',
    data: {
      book: booksService.getBookById(bookId),
      quantity
    }
  });
}, { error: 'Failed to add book to inventory' });

export const storesInventory = controller((request, response) => {
  const storeId = Number(request.params.storeId);

  const inventory = inventoryService.getInventoryByStoreId(storeId);

  response.status(201).send({
    status: 'success',
    data: { inventory }
  });
}, { error: 'Failed to retrive inventory' });
