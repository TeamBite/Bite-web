import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import OfferPage from '../containers/OfferPage';
import VendorPage from '../containers/VendorPage'
import NotFound404 from '../components/NotFound404';

const VendorRouter = () => {
  const { url, params } = useRouteMatch('/vendors/:vendorId')
  return (
    <Switch>
      <Route exact path={url} >
        <VendorPage id={params.vendorId} />
      </Route>
      <Route exact path={`${url}/offers/:offerId`} >
        <OfferPage vendorId={params.vendorId} />
      </Route>
      <NotFound404 />
    </Switch>
  )
}

export default VendorRouter
