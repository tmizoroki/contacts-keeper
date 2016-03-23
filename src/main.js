import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App.jsx';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';

const store = configureStore();

ReactDOM.render(
    <App store={store} />,
  document.getElementById('container')
);
