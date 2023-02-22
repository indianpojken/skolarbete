import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counterReducers';

/**
 * Store - Sparar vårt state
 * Reducer - Som uppdaterar vårt state
 * Action - Som säger vad vi ska uppdatera
 * Dispatch - Som triggar en action
 */

const store = legacy_createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> { /** Gör vår store tillgänglig för vår React app */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
