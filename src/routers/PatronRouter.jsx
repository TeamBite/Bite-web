import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingLayout from '../components/LandingLayout'
import VerificationCodeForm from '../components/Patron/VerificationCodeForm'
import NotFound404 from '../components/NotFound404'
import PatronAuth from '../containers/PatronAuth'

const PatonRouter = () => {
  const path = '/patron'
  return (
    <LandingLayout>
      <Switch>
        <Route path={`${path}/code-verification`}>
          <VerificationCodeForm />
        </Route>
        <Route path={path}>
          <PatronAuth />
        </Route>
        <NotFound404 />
      </Switch>
    </LandingLayout >
  )
}

export default PatonRouter
