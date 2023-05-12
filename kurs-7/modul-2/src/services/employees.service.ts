import { employeesModel } from '../models/mod';
import { storesService } from './mod';

export function addEmployeeToStore(storeId: number, name: string): employeesModel.Employee {
  storesService.getStoreById(storeId);
  const { lastInsertRowid } = employeesModel.createEmployee(storeId, name);
  return employeesModel.getEmployeeById(lastInsertRowid as number);
}

export function getEmployeesByStoreId(storeId: number):
  employeesModel.Employee[] | Error {
  storesService.getStoreById(storeId);
  return employeesModel.getEmployeesByStoreId(storeId);
}
