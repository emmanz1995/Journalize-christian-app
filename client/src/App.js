import React from 'react';
import { GlobalStyle } from './GlobalStyle.js';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <Navbar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
    </div>
  );
}

export default App;
