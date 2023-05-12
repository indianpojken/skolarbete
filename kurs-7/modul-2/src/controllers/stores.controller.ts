import { controller } from '../utils/controller.util';
import { storesService } from '../services/mod';

export const addStore = controller((request, response) => {
  const { name } = request.body;
  const store = storesService.addStore(name);

  response.status(201).send({
    status: 'success',
    data: { store: store }
  });
}, { error: 'Failed to add store' });
