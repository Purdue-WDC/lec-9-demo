import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Home from './Home';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/page1">
            <Page1></Page1>
            </Route> 
            <Route path="/page2">
            <Page2></Page2>
            </Route> 
        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
