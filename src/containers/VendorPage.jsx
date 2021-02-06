import React from 'react'
import { Segment, Header, Image, Icon, Divider } from 'semantic-ui-react'
import './VendorPage.css'
import OffersList from '../components/Vendors/OffersList'

const VendorPage = ({ vendorId, vendor }) => {
  return (
    <Segment className="page-container">
      <Segment>
        <Header as="h1">{vendor.name}</Header>
        <Image className="cover-img" src={vendor.venueImage} />
      </Segment>
      <Segment>
        <Icon name="map pin" />
        <a href={`https://maps.google.com/?q=${vendor.name} ${vendor.address}`}>{vendor.address}</a>
        <Divider />
        <Icon name="phone" />
        <a href={`tel:${vendor.phoneNumber}`}>{vendor.phoneNumber}</a>
      </Segment>
      <Segment>
        <OffersList vendorId={vendorId} offers={vendor.offers} />
      </Segment>
    </Segment >
  )
}

export default VendorPage
