import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

const Main = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));
