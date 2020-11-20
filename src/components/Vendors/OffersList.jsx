import React from 'react'
import { List, Image, Message, Header, Icon } from 'semantic-ui-react'

const OffersList = ({ offers }) => {
  const Offers = () => (
    <List divided >{
      offers.map(offer => (
        <List.Item key={offer.offerId}>
          <Image className="offer-thumbnail-img" src={offer.offerImage} />
          <List.Content>
            <List.Header>{offer.nameOfOffer}</List.Header>
            <List.Description>
              <Icon name="food" /> {offer.remainingMeals} meals remaining
            </List.Description>
          </List.Content>
        </List.Item>
      ))
    }
    </List>
  )

  const NoOffersMessage = () => (
    <Message
      warning={true}
      icon="meh outline"
      header="No Offers"
      content="Unfortunately, we do not have any offers at the moment"
    />
  )

  return (
    <>
      <Header as="h2">Offers</Header>
      {offers.length ? <Offers /> : <NoOffersMessage />}
    </>
  )
}

export default OffersList
