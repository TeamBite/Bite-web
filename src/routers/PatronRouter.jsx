import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PatonLogin from '../components/PatronLogin'
import LandingLayout from '../components/LandingLayout'
import NotFound404 from '../components/NotFound404'

const PatonRouter = () => {
  const path = '/patron'
  return (
    <LandingLayout>
      <Switch>
        <Route path={`${path}/code-verification`}>
          <p> code-verification</p>
        </Route>
        <Route path={`${path}/diet-preferences`}>
          <p> diet-preferences</p>
        </Route>
        <Route exact path={path}>
          <PatonLogin />
        </Route>
        <NotFound404 />
      </Switch>
    </LandingLayout >
  )
}

export default PatonRouter
