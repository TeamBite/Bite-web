import React from 'react'
import { Button, Grid, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Segment>
      <Segment basic>
        <Image src="/images/bite-logo.png" size="medium" centered />
      </Segment>
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
    </Segment >
  )
}

export default Landing
