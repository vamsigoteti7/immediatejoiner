import React, { Component } from 'react';
import './App.css';
import Logintbygoogle from './components/Loginbygoogle';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GPayButton from 'react-google-pay-button'
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import RegisterPage from './components/Register';
import ImmediatejoinerHome from './components/Immediatejoinerhome';
import RecruiterDashboard from './components/RecruiterDashboard';
import Employeedashboard from './components/Employeedashboard';
import Membershipimmediate from './components/Membershipimmediate';
// const paymentMethods = [
//   {
//     type: 'CARD',
//     parameters: {
//       allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//       allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA']
//     },
//     tokenizationSpecification: {
//       type: 'PAYMENT_GATEWAY',
//       parameters: {
//         'gateway': 'stripe',
//         'stripe:version': '2019-03-14',
//         'stripe:publishableKey': '<YOUR_PUBLIC_STRIPE_KEY>'
//       }
//     }
//   },
//   {
//     type: 'PAYPAL',
//     parameters: {
//       'purchase_context': {
//         'purchase_units': [{
//           'payee': {
//             'merchant_id': '<YOUR PAYPAL_ACCOUNT_ID>'
//           }
//         }]
//       }
//     },
//     tokenizationSpecification: {
//       type: 'DIRECT'
//     }
//   }
// ]
const responseGoogle = (response) => {
  console.log(response);
}

const logout = (response) => {
  console.log(response);
}

class App extends React.Component {
  loadPaymentDataHandler = paymentData => {
    const paymentToken = paymentData.paymentMethodData.tokenizationData.token
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Router>
            <Switch>
              <Route exact path='/' component={ImmediatejoinerHome} ></Route>
              <Route path='/Login' component={Logintbygoogle} ></Route>
              <Route path='/Dashboard' component={Dashboard} ></Route>
              <Route path='/Register' component={RegisterPage} ></Route>
              <Route path='/Recruit' component={RecruiterDashboard} ></Route>
              <Route path='/Empdashboard' component={Employeedashboard} ></Route>
              <Route path='/Membership' component={Membershipimmediate} ></Route>
            </Switch>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
