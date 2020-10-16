import React from 'react'
import { Image, Segment } from 'semantic-ui-react'

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
