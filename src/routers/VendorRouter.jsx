import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import VendorPage from '../containers/VendorPage'

const VendorRouter = () => {
  const { url, params } = useRouteMatch('/vendors/:id')
  return (
    <Switch>
      <Route exact path={url} >
        <VendorPage id={params.id} />
      </Route>
    </Switch>
  )
}

export default VendorRouter
