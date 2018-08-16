// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from 'react-redux/es/components/Provider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, root,
  );
}
registerServiceWorker();
