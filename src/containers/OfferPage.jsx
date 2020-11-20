import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
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
    <div>
      <Header as="h1">{offer.nameOfOffer}</Header>
    </div>
  )
}

export default OfferPage
