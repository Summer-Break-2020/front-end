// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styling
import './App.css';
// Components
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};


export default App;