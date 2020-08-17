import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './fonts/icomoon/style.css'
import './fonts/line-icons/style.css'
import './scss/style.scss'


import './scss/custom-bs.scss'
import './scss/_custom-variables.scss'
import './scss/_site-navbar.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
