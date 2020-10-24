import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './VendorCard.css'

const VendorCard = ({ vendor }) => {
  return (
    <Card>
      <Link to={`/vendors/${vendor.id}`} >
        <Image className="vendor-thumbnail" src={vendor.venueImage} />
      </Link>
      <Card.Content>
        <Card.Header as={Link} to={`/vendors/${vendor.id}`}>
          {vendor.name}
        </Card.Header>
        <Icon name="phone" />
        <a href={`tel:${vendor.phoneNumber}`}>{vendor.phoneNumber}</a>
      </Card.Content>
    </Card >
  )
}

export default VendorCard
