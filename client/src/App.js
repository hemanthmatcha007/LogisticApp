import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to the Logistic App</h1>
        </Route>
        <Route path="/about">
          <h1>About Us</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;