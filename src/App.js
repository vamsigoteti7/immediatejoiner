import React from 'react';
import './App.css';
import Logintbygoogle from './components/Loginbygoogle';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import ImmediatejoinerHome from './components/Immediatejoinerhome';
import RecruiterDashboard from './components/RecruiterDashboard';
import Employeedashboard from './components/Employeedashboard';
import Membershipimmediate from './components/Membershipimmediate';
import Contactus from './components/Contactus';
import Postajob from './components/Postajob';
import About from './components/About';
import Jobdetails from './components/Jobdetails';
import EmployeeDetails from './components/EmployeeDetails';
import JobApplicationsDetail from './components/JobApplicationsDetail';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Router>
            <Switch>
              <Route exact path='/' component={ImmediatejoinerHome} ></Route>
              <Route path='/Login' component={Logintbygoogle} ></Route>
              <Route path='/EmpDetails' component={EmployeeDetails} ></Route>
              <Route path='/JobApplicationDetails' component={JobApplicationsDetail} ></Route>
              <Route path='/Jobdetail' component={Jobdetails} ></Route>
              <Route path='/Postjob' component={Postajob} ></Route>
              <Route path='/About' component={About} ></Route>
              <Route path='/Contactus' component={Contactus} ></Route>
              <Route path='/RecruiterDashboard' component={RecruiterDashboard} ></Route>
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
