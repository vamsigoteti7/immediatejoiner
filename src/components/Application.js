import React, { useContext } from "react";
import { UserContext } from './providers/UserProvider';
import RecruiterDashboard from './RecruiterDashboard';
import Employeedashboard from './Employeedashboard';
import MembershipPlans from './MembershipPlans';
import Contactus from './Contactus';
import Postajob from './Postajob';
import About from './About';
import Jobdetails from './Jobdetails';
import EmployeeDetails from './EmployeeDetails';
import JobApplicationsDetail from './JobApplicationsDetail';
import Logintbygoogle from './Loginbygoogle';
import Immediatejoinerhome from './Immediatejoinerhome';
import ImmediateJoinerPasswordReset from './ImmediateJoinerPasswordReset';
import Immediatejoinersignup from './Immediatejoinersignup';
import Membership from './payments/Membership';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
// import history from './history';

function Application() {
  const user = useContext(UserContext);
  return (
    user.user ?
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/Empdashboard' render={({ history }) => (
                <Employeedashboard  history={history} userid={user} />
              )}
            />
            <EmployeeDetails path='/EmpDetails' userid={user} />
            <JobApplicationsDetail path='/JobApplicationDetails' userid={user} />
            <Jobdetails path='/Jobdetail' userid={user} />
            <Postajob path='/Postjob' userid={user} />
            <RecruiterDashboard path='/RecruiterDashboard' userid={user} />
            
            <Postajob path="/Postjob" userid={user} />
            <Membership path="/Payment" userid={user} />
            <MembershipPlans path="/" userid={user} />
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
