import React, { useContext } from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import { AuthContext } from '../providers/AuthContext'
import Vendors from '../containers/Vendors'
import VendorRouter from './VendorRouter'
import NotFound404 from '../components/NotFound404'

const VendorsRouter = () => {
  const { url } = useRouteMatch('/vendors')
  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    return (
      <Switch>
        <Route exact path={url}>
          <Vendors />
        </Route>
        <Route path={`${url}/:vendorId`}>
          <VendorRouter />
        </Route>
        <NotFound404 />
      </Switch>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default VendorsRouter
