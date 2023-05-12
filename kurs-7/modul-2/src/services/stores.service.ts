import { storesModel } from '../models/mod';

export function addStore(name: string): storesModel.Store {
  storesModel.createStore(name);
  return storesModel.getStoreByName(name);
}

export function getStoreById(storeId: number)
  : storesModel.Store | Error {
  const store = storesModel.getStoreById(storeId);

  if (store) {
    return store;
  } else {
    throw new Error(`No store with ID: '${storeId}' exist`);
  }
}
