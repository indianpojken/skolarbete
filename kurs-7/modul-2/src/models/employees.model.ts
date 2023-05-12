import { databaseService } from '../services/mod';

export interface Employee {
  id: number,
  name: string
}

export function createEmployee(storeId: number, name: string) {
  return databaseService.database
    .prepare(`
      INSERT INTO employees (storeId, name)
      VALUES (@storeId, @name)
    `)
    .run({ storeId, name });
}

export function getEmployeeById(id: number): Employee {
  return databaseService.database
    .prepare(`
      SELECT id, name FROM employees
      WHERE id = @id
    `)
    .get({ id }) as Employee;
}

export function getEmployeesByStoreId(storeId: number): Employee[] {
  return databaseService.database
    .prepare(`
      SELECT id, name FROM employees
      WHERE storeId = @storeId
    `)
    .all({ storeId }) as Employee[];
}
