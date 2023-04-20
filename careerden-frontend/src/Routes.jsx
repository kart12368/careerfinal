import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PrivateRoute from './auth/helper/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Engineering from './pages/Engineering';
import Doctor from './pages/Doctor';
import Quiz from './pages/Quiz';
import Result from './components/Result';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about/engineering" component={Engineering} />
        <Route exact path="/about/doctor" component={Doctor} />
        <Route exact path="/result" component={Result} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
};

export default Routes;
