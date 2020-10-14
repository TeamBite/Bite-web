import React from 'react'
import { Button, Container, Grid, Divider, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Segment>
      <Segment basic>
        <Image src="/images/bite-logo.png" size="medium" centered />
      </Segment>
      <Divider />
      <Message>
        <Message.Header>Welcome!</Message.Header>
        <p>Are you a Vendor or a Patron?</p>
      </Message>
      <div>
        <Button primary fluid as={Link} to="/vendor">I'm a Vendor</Button>
        <Button fluid as={Link} to="/patron">I'm a Patron</Button>
      </div>
    </Segment >
  )
}

export default Landing
