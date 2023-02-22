import React from 'react';
import ReactDOM from 'react-dom/client';

import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

import { nameReducer } from './reducers/nameReducer';

import App from './App';

const store = legacy_createStore(nameReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
