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

function Application() {
  const user = useContext(UserContext);
  return (
    user.user ?
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/Empdashboard' render={({ history }) => (
              <Employeedashboard history={history} userid={user} />
            )}
            />
            <Route exact path='/Login' render={({ history }) => (
              <MembershipPlans history={history} userid={user} />
            )}
            />
            <Route exact path='/' render={({ history }) => (
              <MembershipPlans history={history} userid={user} />
            )}
            />

            <Route exact path='/EmpDetails' render={({ history }) => (
              <EmployeeDetails history={history} userid={user} />
            )}
            />

            <Route exact path='/JobApplicationDetails' render={({ history }) => (
              <JobApplicationsDetail history={history} userid={user} />
            )}
            />

            <Route exact path='/Jobdetail' render={({ history }) => (
              <Jobdetails history={history} userid={user} />
            )}
            />

            <Route exact path='/Postjob' render={({ history }) => (
              <Postajob history={history} userid={user} />
            )}
            />

            <Route exact path='/RecruiterDashboard' render={({ history }) => (
              <RecruiterDashboard history={history} userid={user} />
            )}
            />

            <Route exact path="/Payment" render={({ history }) => (
              <Membership history={history} userid={user} />
            )}
            />
            <Route path='/About' component={About} ></Route>
            <Route path='/Contactus' component={Contactus} ></Route>
          </Switch>
        </Router>
      </BrowserRouter>

      :
      <Router>
        <Route path='/About' component={About} ></Route>
        <Route path='/Contactus' component={Contactus} ></Route>
        <Route exact path='/Login' render={({ history }) => (
          <Logintbygoogle history={history} userid={user} />
        )}
        />
        <Route exact path='/' component={Immediatejoinerhome} ></Route>
        <Route path='/Signin' component={Logintbygoogle} ></Route>
        <Route path="/Signup" component={Immediatejoinersignup} ></Route>
        <Route path="/PasswordReset" component={ImmediateJoinerPasswordReset} ></Route>
      </Router>
  );
}

export default Application;
