import React from 'react'
import ReactDOM from 'react-dom/client'

import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

import { RouterProvider } from 'react-router-dom';

import { ticketReducer } from './reducers/ticketReducer';
import { router } from './router';

import './style.scss';

const store = legacy_createStore(
  ticketReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
