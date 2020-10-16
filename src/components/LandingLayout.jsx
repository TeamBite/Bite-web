import React from 'react'
import { Button, Grid, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LandingLayout = ({ children }) => {
  return (
    <Segment>
      <Segment basic>
        <Image src="/images/bite-logo.png" size="medium" centered />
      </Segment>
      <div>
        {children}
      </div>
    </Segment >
  )
}

export default LandingLayout
