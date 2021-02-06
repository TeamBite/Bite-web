import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import OfferPage from '../containers/OfferPage';
import VendorPage from '../containers/VendorPage'
import NotFound404 from '../components/NotFound404';
import store from '../firebase/store'

const VendorRouter = () => {
  const { url, params } = useRouteMatch('/vendors/:vendorId')
  const [vendor, setVendor] = useState(null)
  useEffect(() => {
    const getVendor = async () => {
      try {
        const vendorData = await store.Vendors.getById(params.vendorId)
        setVendor(vendorData)
      } catch (err) {
        console.log(err)
      }
    }
    getVendor()
  }, [params.vendorId])
  if (vendor) {
    return (
      <Switch>
        <Route exact path={url} >
          <VendorPage vendorId={params.vendorId} vendor={vendor} />
        </Route>
        <Route exact path={`${url}/offers/:offerId`} >
          <OfferPage vendorId={params.vendorId} vendor={vendor} />
        </Route>
        <NotFound404 />
      </Switch>
    )
  } else {
    return <p>Loading</p>
  }


}

export default VendorRouter
