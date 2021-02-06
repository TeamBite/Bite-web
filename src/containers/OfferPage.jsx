import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Header, Image, Icon, Segment, Button, Divider, Message } from 'semantic-ui-react';
import QRCode from 'qrcode.react';
import store from '../firebase/store';
import { AuthContext } from '../providers/AuthContext';
import "./OfferPage.css";

const OfferPage = ({ vendorId, vendor }) => {
  const [offer, setOffer] = useState(null)
  const [pickupInstructions, setPickupInstructions] = useState('')
  const [claimedOffer, setClaimedOffer] = useState(false)
  const [codeValue, setCodeValue] = useState('')
  const { currentUser } = useContext(AuthContext)
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

  useEffect(() => {
    const getInstructions = async () => {
      try {
        let instructions = await store.Vendors.getPickupInstructions(vendorId)
        setPickupInstructions(instructions)
      } catch (err) {
        console.log('ERROR =>', err)
      }
    }
    getInstructions()
  }, [vendorId])

  const handleClaimButton = (e) => {
    let date = (new Date()).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })
    setCodeValue(`${offer.nameOfOffer} ${date} ${offerId} ${currentUser.uid}`)
    setClaimedOffer(true)
  }

  const handleForfeitOffer = (e) => {
    setClaimedOffer(false)
  }

  const OfferDetails = () => {
    if (claimedOffer) {
      return (
        <div className="offer-page">
          <Segment>
            <Header as="h3">Pick-Up Instructions</Header>
            <p>{pickupInstructions}</p>
          </Segment>
          <Segment>
            <Header as="h3">Code to claim</Header>
            <p>Present the code below to the vendor to claim your offer.</p>
            <QRCode value={codeValue} renderAs="svg" height="100%" width="100%" />
          </Segment>
          <Segment>
            <Header as="h3">Map</Header>
            <p>You can get see the location of this vendor and get directions to it.</p>
            <iframe
              className="map"
              title={`Map with pin at address ${vendor.address}`}
              src={`https://www.google.com/maps/embed/v1/place?q=${vendor.address}&key=AIzaSyCWhS0deQnzBtaS1N2cv55Rl3uTDeKGSP8`}
            />
            <Button
              basic
              fluid
              color="pink"
              as='a'
              href={`https://www.google.com/maps/dir//${vendor.address}`}
            >
              Get Directions
              </Button>
          </Segment>
        </div>
      )
    } else {
      return (
        <Message
          info={true}
          icon="shopping bag"
          header="Offer Details"
          content="Will appear here once an offer is claimed"
        />
      )
    }
  }
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
        {claimedOffer
          ? <Button primary fluid onClick={handleForfeitOffer}>Forfeit Offer</Button>
          : <Button primary fluid onClick={handleClaimButton}>Claim Offer</Button>
        }
      </Segment>
      <Segment>
        <Header as="h2">Details</Header>
        <OfferDetails />
      </Segment>

    </Segment>
  )
}

export default OfferPage
