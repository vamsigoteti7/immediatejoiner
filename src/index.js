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
import './css/animate.min.css'
import './css/bootstrap-select.min.css'
import './css/custom-bs.css'
import './css/jquery.fancybox.min.css'
import './css/quill.snow.css'
import './css/style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
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
