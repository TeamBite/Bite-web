import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-less/semantic.less'
import Landing from './components/Landing';
import NotFound404 from './components/NotFound404';
import AuthProvider from './providers/AuthContext';
import VendorsRouter from './routers/VendorsRouter';
import AuthRouter from './routers/AuthRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/auth">
            <AuthRouter />
          </Route>
          <Route path="/vendors">
            <VendorsRouter />
          </Route>
          <Route >
            <NotFound404 />
          </Route>
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
