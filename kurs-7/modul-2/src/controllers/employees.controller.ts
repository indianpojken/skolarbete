import { controller } from '../utils/controller.util';
import { employeesService } from '../services/mod';

export const addEmployee = controller((request, response) => {
  const { name } = request.body;
  const storeId = Number(request.params.storeId);

  const addEmployee = employeesService.addEmployeeToStore(storeId, name);

  response.status(201).send({
    status: 'success',
    data: { employee: addEmployee }
  });
}, { error: 'Failed to add employee' });

export const storesEmployees = controller((request, response) => {
  const storeId = Number(request.params.storeId);
  const employees = employeesService.getEmployeesByStoreId(storeId);

  response.status(201).send({
    status: 'success',
    data: { employees }
  });
}, { error: 'Failed to retrive employees' });
