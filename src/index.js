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

// // import './js/jquery.min.js'
// // import './js/bootstrap.bundle.min.js'
// // // import './js/isotope.pkgd.min.js'
// // import './js/stickyfill.min.js'
// // import './js/jquery.fancybox.min.js'
// // import './js/jquery.easing.1.3.js'
// // import './js/jquery.waypoints.min.js'
// // import './js/jquery.animateNumber.min.js'
// // import './js/owl.carousel.min.js'
// // import './js/quill.min.js'
// // import './js/bootstrap-select.min.js'
// // import './js/custom.js'
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
