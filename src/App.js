import React from 'react';
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './routes/privateRoute.js'
import PageRoutes from './routes/index.js'
import './App.css';
import Login from './pages/login'

function App() {
  return (
    <div>
        {/* <Switch> */}
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/' component={PageRoutes}/>
        {/* </Switch> */}
    </div>
  );
}

export default App;
