import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'

const VerificationCodeForm = () => {
  const [code, setCode] = useState("")
  const history = useHistory()

  const handleSubmit = async () => {
    try {
      await window.confirmationResult.confirm(code)
      history.push('/vendors')
    } catch (err) {
      console.log('confirmationResult.confirm() ERROR', err)
    }
  }

  return (
    <>
      <Message>
        <Message.Header>Enter Code</Message.Header>
        <p>Please enter the 6 digit verification code we sent to your phone number via sms</p>
      </Message>
      <Form >
        <Form.Input required fluid placeholder="123456" type="number" onChange={e => setCode(e.target.value)} />
        <Form.Button primary fluid onClick={handleSubmit} type="submit">Submit</Form.Button>
      </Form>
    </>
  )
}

export default VerificationCodeForm;
