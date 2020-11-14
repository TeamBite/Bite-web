import React from 'react'
import { useEffect, useState } from 'react'
import { Segment, Header, Image, Icon, Divider, List } from 'semantic-ui-react'
import './VendorPage.css'
import store from '../firebase/store'
const VendorPage = ({ id }) => {
  const [vendor, setVendor] = useState(null)

  useEffect(() => {
    const getVendor = async () => {
      try {
        const vendorData = await store.Vendors.getById(id)
        setVendor(vendorData)
      } catch (err) {
        console.log(err)
      }
    }
    getVendor()
  }, [id])
  if (vendor) {
    return (
      <Segment className="page-container">
        <Segment>
          <Header as="h1">{vendor.name}</Header>
          <Image className="vendor-img" src={vendor.venueImage} />
        </Segment>
        <Segment>
          <Icon name="map pin" />
          <a href={`https://maps.google.com/?q=${vendor.name} ${vendor.address}`}>{vendor.address}</a>
          <Divider />
          <Icon name="phone" />
          <a href={`tel:${vendor.phoneNumber}`}>{vendor.phoneNumber}</a>
        </Segment>

        <Segment>
          <Header as="h2">Offers</Header>
          {vendor.offers.map(offer => (
            <List key={offer.offerId}>
              <List.Item>
                <Image className="offer-thumbnail-img" src={offer.offerImage} />
                <List.Content>
                  <List.Header>{offer.nameOfOffer}</List.Header>
                  <List.Description>
                    <Icon name="food" />
                    {offer.remainingMeals} meals remaining
                    </List.Description>
                </List.Content>
              </List.Item>
            </List>
          ))}
        </Segment>
      </Segment>
    )
  } else {
    return (<p>Loading...</p>)
  }
}

export default VendorPage
