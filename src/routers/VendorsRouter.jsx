import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound404 from '../components/NotFound404'

const VendorsRouter = () => {
  const path = '/vendors'
  return (
    <Switch>
      <Route exact path={path}>
        <p>Will be a private route that displays all vendors</p>
      </Route>
      <NotFound404 />
    </Switch>
  )
}

export default VendorsRouter
