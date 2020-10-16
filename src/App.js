import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-less/semantic.less'
import Landing from './components/Landing';
import NotFound404 from './components/NotFound404';
import PatronRouter from './routers/PatronRouter';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/patron">
          <PatronRouter />
        </Route>
        <Route >
          <NotFound404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
