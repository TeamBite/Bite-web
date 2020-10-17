import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { Form, Message, Button } from 'semantic-ui-react'
import DietPreferencesForm from '../components/Patron/DietPreferencesForm'

import firebase from '../firebase'
import { logInPatron } from '../firebase/auth'

const PatronContainer = () => {
  const path = useRouteMatch('/patron').path
  const dietPrefsRouteMatch = useRouteMatch('/patron/diet-preferences')
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
  } else if (dietPrefsRouteMatch) {
    message = {
      title: "Dietary Preferences & Allergies",
      details: "Please specify any dietary preferences you may have"
    }
  } else {
    message = {
      title: "Patron Login",
      details: "Please enter your phone number"
    }
  }


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

  useEffect(() => {
    // Setup recaptcha
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { size: 'invisible' })
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

        <Switch>
          <Route exact path={path}>
            <Form.Button primary fluid id="login-btn" onClick={handleLogIn} >
              Login
            </Form.Button>
            <Button as={Link} secondary fluid to={`${path}/diet-preferences`}>
              Create Account
            </Button>
          </Route>
          <Route path={`${path}/diet-preferences`}>
            <DietPreferencesForm />
          </Route>
        </Switch>
      </Form>
    </ >
  )
}

export default PatronContainer
