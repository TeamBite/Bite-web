import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'
import firebase from '../firebase'
import { logInPatron } from '../firebase/auth';

const PatonLogin = () => {
  const history = useHistory()
  const location = useLocation()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    // Setup recaptcha
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-btn', { size: 'invisible' })
  }, [])

  const handleLogIn = async () => {
    const verifier = window.recaptchaVerifier
    try {
      const confirmationResult = await logInPatron(`+1${phoneNumber}`, verifier)
      window.confirmationResult = confirmationResult // Used by VerificationCodeForm
      history.push(`${location.pathname}/code-verification`)
    } catch (err) {
      setError(err)
      console.log('logInVendor ERROR', err)
    }
  }

  const handleCreateAccount = () => {
    history.push(`${location.pathname}/diet-preferences`)
  }

  const message = {
    title: error ? "Error" : "Patron Login",
    details: error ? error.message : "Please enter your phone number"
  }

  return (
    <>
      <Message error={error}>
        <Message.Header>{message.title}</Message.Header>
        <p>{message.details}</p>
      </Message>
      <Form >
        <Form.Input
          required
          fluid
          placeholder="9175551234"
          type="text"
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <Form.Button
          primary fluid id="login-btn"
          onClick={handleLogIn}
        >
          Login
        </Form.Button>
        <Form.Button secondary fluid onClick={handleCreateAccount}>Create Account</Form.Button>
      </Form>
    </>
  )
}

export default PatonLogin
