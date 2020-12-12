import React, { useContext } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import PatronAuthRouter from './Auth/PatronAuthRouter';
import { AuthContext } from '../providers/AuthContext';

const AuthRouter = () => {
  const { path } = useRouteMatch();
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/vendors" /> // TODO: Use appropriate redirect depending on user type. Redirect depends on whether the user is a Patron or a Vendor for now we are assuming they are a Patron
  }

  return (
    <Switch>
      <Route path={`${path}/patron`}>
        <PatronAuthRouter />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default AuthRouter
