import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App.jsx';

const store = configureStore();

ReactDOM.render(
    <App store={store} />,
  document.getElementById('container')
);
