import React, { useContext }  from 'react'
import { Button, Grid, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LandingLayout from './LandingLayout'
import { AuthContext } from '../providers/AuthContext'
import {Redirect,} from 'react-router-dom'
const Landing = () => {
  const { currentUser } = useContext(AuthContext)
  if(currentUser){
    return <Redirect to="/vendors" />
  }
  else {
    return (
    <LandingLayout>
      <Message>
        <Message.Header>Welcome!</Message.Header>
        <p>Are you a Vendor or a Patron?</p>
      </Message>
      <Grid padded>
        <Grid.Row>
          <Button primary fluid as={Link} to="/patron">I'm a Patron</Button>
        </Grid.Row>
        <Grid.Row>
          <Button basic fluid color="pink" as={Link} to="/vendor">I'm a Vendor</Button>
        </Grid.Row>
      </Grid>
    </LandingLayout >
  )
}
}

export default Landing
