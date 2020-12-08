import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'

import firebase from '../firebase'
import { logInPatron } from '../firebase/auth'

const PatronAuth = () => {
  const history = useHistory()
  const location = useLocation()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState(null)

  let message
  if (error) {
    message = {
      title: "Error",
      details: error.message
    }
  } else {
    message = {
      title: "Patron Login",
      details: "Please enter your phone number. This will log you in or sign you up if you do not have an account."
    }
  }


  const handleLogIn = async () => {
    const verifier = window.recaptchaVerifier
    const smsConfirmationResult = window.confirm("Standard SMS rates may apply");
    if(smsConfirmationResult === false)return;
    try {
      const confirmationResult = await logInPatron(`+1${phoneNumber}`, verifier)
      window.confirmationResult = confirmationResult // Used by VerificationCodeForm
      history.push(`${location.pathname}/code-verification`)
    } catch (err) {
      setError(err)
      console.log('logInVendor ERROR', err)
    }
  }

  useEffect(() => {
    // Setup recaptcha
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-btn', { size: "invisible" })
    window.recaptchaVerifier.render()
  }, [])

  return (
    <>
      <Message error={error}>
        <Message.Header>{message.title}</Message.Header>
        <p>{message.details}</p>
      </Message>
      <div id="recaptcha-container"></div>
      <Form>
        <Form.Input
          required
          fluid
          label="Phone Number"
          placeholder="9175551234"
          type="text"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />

        <Form.Button primary fluid id="login-btn" onClick={handleLogIn} >
          Enter
        </Form.Button>
      </Form>
    </ >
  )
}

export default PatronAuth
