import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'

const PatonLogin = () => {
  const history = useHistory()
  const location = useLocation()

  const handleLogIn = () => {
    // history.push(`${location.pathname}/code-verification`)
    history.push(`/patron/code-verification`)
  }

  const handleCreateAccount = () => {
    // history.push(`${location.pathname}/diet-preferences`)
    history.push(`/patron/diet-preferences`)
  }

  console.log('PatronLogin location.pathname', location.pathname)
  return (
    <>
      <Message>
        <Message.Header>Patron Login</Message.Header>
        <p>Please enter your phone number</p>
      </Message>
      <Form padded error>
        <Form.Input required fluid placeholder="(123) 456-7890" type="text" />
        <Form.Button primary fluid onClick={handleLogIn}>Login</Form.Button>
        <Form.Button secondary fluid onClick={handleCreateAccount}>Create Account</Form.Button>
      </Form>
    </>
  )
}

export default PatonLogin
