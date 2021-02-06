import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'

const VerificationCodeForm = () => {
  const [code, setCode] = useState("")
  const history = useHistory()
  const [error, setError] = useState(null)
  const handleSubmit = async () => {
    try {
      await window.confirmationResult.confirm(code)
      history.push('/vendors')
    } catch (err) {
      setError(err)
      console.log('confirmationResult.confirm() ERROR', err)
    }
  }

  let message
  if (error) {
    message = {
      title: "Login Failed",
      details: "The 6 digit verification code you entered is wrong"
    }
  } else {
    message = {
      title: "Enter Code",
      details: "Please enter the 6 digit verification code we sent to your phone number via sms"
    }
  }

  return (
    <>
      <Message error={error}>
        <Message.Header>{message.title}</Message.Header>
        <p>{message.details}</p>
      </Message>
      <Form >
        <Form.Input required fluid placeholder="123456" type="number" onChange={e => setCode(e.target.value)} />
        <Form.Button primary fluid onClick={handleSubmit} type="submit">Submit</Form.Button>
      </Form>
    </>
  )
}

export default VerificationCodeForm;
