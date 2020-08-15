import React from 'react';
import './App.css';
import Logintbygoogle from './components/Loginbygoogle';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './components/Register';
import ImmediatejoinerHome from './components/Immediatejoinerhome';
import RecruiterDashboard from './components/RecruiterDashboard';
import Employeedashboard from './components/Employeedashboard';
import Membershipimmediate from './components/Membershipimmediate';
import Contactus from './components/Contactus';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Router>
            <Switch>
              <Route exact path='/' component={ImmediatejoinerHome} ></Route>
              <Route path='/Login' component={Logintbygoogle} ></Route>
              <Route path='/Contactus' component={Contactus} ></Route>
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
