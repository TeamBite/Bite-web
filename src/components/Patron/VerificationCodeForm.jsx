import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const PatonLogin = () => {

  const handleSubmit = () => {
    alert('verifying code')
  }

  return (
    <>
      <Message>
        <Message.Header>Enter Code</Message.Header>
        <p>Please enter the 6 digit verification code we sent to your phone number via sms</p>
      </Message>
      <Form >
        <Form.Input required fluid placeholder="123456" type="number" />
        <Form.Button primary fluid onClick={handleSubmit} type="submit">Submit</Form.Button>
      </Form>
    </>
  )
}

export default PatonLogin
