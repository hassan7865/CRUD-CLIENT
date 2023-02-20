import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);