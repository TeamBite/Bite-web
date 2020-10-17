import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthContext'
import NotFound404 from '../components/NotFound404'
import { signOut } from '../firebase/auth'

const VendorsRouter = () => {
  const path = '/vendors'
  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return (
      <Switch>
        <Route exact path={path}>
          <Button onClick={signOut}>Log Out</Button>
          <p>Will be a private route that displays all vendors</p>
        </Route>
        <NotFound404 />
      </Switch>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default VendorsRouter
