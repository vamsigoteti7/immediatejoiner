import React, { useContext } from "react";
import { UserContext } from './providers/UserProvider';
import RecruiterDashboard from './RecruiterDashboard';
import Employeedashboard from './Employeedashboard';
import Membershipimmediate from './Membershipimmediate';
import Contactus from './Contactus';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordReset from './PasswordReset';
import Postajob from './Postajob';
import About from './About';
import Jobdetails from './Jobdetails';
import EmployeeDetails from './EmployeeDetails';
import JobApplicationsDetail from './JobApplicationsDetail';
import Logintbygoogle from './Loginbygoogle';
import Immediatejoinerhome from './Immediatejoinerhome';
import ImmediateJoinerPasswordReset from './ImmediateJoinerPasswordReset';
import Immediatejoinersignup from './Immediatejoinersignup';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function Application() {
  const user = useContext(UserContext);
  return (
    user.user ? 
      <BrowserRouter>
        <Router>
          <Switch>
            {/* <Route path='/EmpDetails' component={EmployeeDetails} ></Route>
            <Route path='/JobApplicationDetails' component={JobApplicationsDetail} ></Route>
            <Route path='/Jobdetail' component={Jobdetails} ></Route>
            <Route path='/Postjob' component={Postajob} ></Route>
            <Route path='/RecruiterDashboard' component={RecruiterDashboard} ></Route>
            <Route path='/Empdashboard' component={Employeedashboard} ></Route> 
            <Route path='/' userid={user} component={Membershipimmediate} ></Route>*/}
            <Membershipimmediate path="/" userid={user} />
          </Switch>
        </Router>
      </BrowserRouter>

      :
      <Router>
        <Route path='/About' component={About} ></Route>
        <Route path='/Contactus' component={Contactus} ></Route>
        <Route path='/Login' component={Logintbygoogle} ></Route>
        <Route exact path='/' component={Immediatejoinerhome} ></Route>
        <Route path='/Signin' component={Logintbygoogle} ></Route>
        <Route path="/Signup" component={Immediatejoinersignup} ></Route>
        <Route path="/PasswordReset" component={ImmediateJoinerPasswordReset} ></Route>
      </Router>
  );
}

export default Application;
