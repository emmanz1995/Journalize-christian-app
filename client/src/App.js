import React from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { PrivateRoute } from './config/PrivateRoute';

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
    </div>
  );
}

export default App;
