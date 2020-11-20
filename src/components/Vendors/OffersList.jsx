import React from 'react'
import { Link } from 'react-router-dom'
import { List, Image, Message, Header, Icon } from 'semantic-ui-react'

const OffersList = ({ vendorId, offers }) => {
  const Offers = () => (
    <List divided >{
      offers.map(offer => (
        <Link
          to={`/vendors/${vendorId}/offers/${offer.offerId}`}
          key={offer.offerId}
        >
          <List.Item >
            <Image className="item__img" src={offer.offerImage} />
            <List.Content className="item__content">
              <List.Header className="item__header">{offer.nameOfOffer}</List.Header>
              <List.Description>
                <Icon name="food" /> {offer.remainingMeals} meals remaining
            </List.Description>
            </List.Content>
          </List.Item>
        </Link >
      ))
    } </List>
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
