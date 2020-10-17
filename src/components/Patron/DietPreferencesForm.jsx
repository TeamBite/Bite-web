import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import "./DietPreferences.css"

const DietPreferences = ({ handleSubmit }) => {
  return (
    <>
      <Form.Field className="form-field-checkbox">
        <label>Nut Free</label>
        <Checkbox toggle />
      </Form.Field>
      <Form.Field className="form-field-checkbox">
        <label>Gluten Free</label>
        <Checkbox toggle />
      </Form.Field>
      <Form.Field className="form-field-checkbox">
        <label>Vegetarian</label>
        <Checkbox toggle />
      </Form.Field>
      <Form.Button primary fluid onClick={handleSubmit} type="submit">Create Account</Form.Button>
    </>
  )
}

export default DietPreferences;
