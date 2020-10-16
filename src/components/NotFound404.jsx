import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Message, Segment } from 'semantic-ui-react'

const NotFound404 = () => {
  return (
    <Container>
      <Segment>
        <Message color="pink">
          <Message.Header> Not Found <span role="img" aria-label="warning">⚠️</span></Message.Header>
          <p> What you were looking for was not found or is currently under construction <span role="img" aria-label="under-construction">🚧</span></p>
        </Message>
        <Link to="/"> ← Back Home</Link>
      </Segment>
    </Container>
  )
}

export default NotFound404
