import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../providers/AuthContext'
import Vendors from '../containers/Vendors'
import NotFound404 from '../components/NotFound404'

const VendorsRouter = () => {
  const path = '/vendors'
  const { currentUser } = useContext(AuthContext)
  console.log('currentUser', currentUser)
  if (currentUser) {
    return (
      <Switch>
        <Route exact path={path}>
          <Vendors />
        </Route>
        <NotFound404 />
      </Switch>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default VendorsRouter
