import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header, Image, Icon, Segment, Button, Divider, Message } from 'semantic-ui-react';
import store from '../firebase/store';

const OfferPage = ({ vendorId }) => {
  const [offer, setOffer] = useState(null)
  const { offerId } = useParams()

  useEffect(() => {
    const getOffer = async () => {
      try {
        let offerData = await store.Offers.get(vendorId, offerId)
        setOffer(offerData)
      } catch (err) {
        console.log(err)
        window.alert('Oops! There was an error, please try again later')
      }
    }
    getOffer()
  }, [vendorId, offerId])

  if (!offer) return <p>Loading...</p>

  return (
    <Segment className="page-container">
      <Segment>
        <Header as="h1">{offer.nameOfOffer}</Header>
        <Image className="cover-img" src={offer.offerImage} />
      </Segment>
      <Segment>
        <Icon name="food" />
        {offer.remainingMeals} {offer.nameOfOffer} portions remaining
        <Divider />
        <Button primary fluid>Claim Offer</Button>
      </Segment>
      <Segment>
        <Header as="h2">Details</Header>
        <Message
          info={true}
          icon="shopping bag"
          header="Offer Details"
          content="Will appear here once an offer is claimed"
        />
      </Segment>

    </Segment>
  )
}

export default OfferPage
