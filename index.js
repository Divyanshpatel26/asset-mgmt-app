import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/ConfigureStore';
import './index.css';
import './css/style.css';

const StoreInstance = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
