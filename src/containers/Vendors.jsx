import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CardGroup, Header, Segment } from 'semantic-ui-react'
import store from '../firebase/store'
import VendorCard from '../components/Vendors/VendorCard'

const Vendors = () => {
  const [vendors, setVendors] = useState([])
  useEffect(() => {
    const getAllVendors = async () => {
      const results = await store.Vendors.getAll()
      setVendors(results)
    }

    getAllVendors()
  }, [])
  return (
    <Segment style={{ minHeight: '100vh' }}>
      <Header>Vendors</Header>
      <CardGroup itemsPerRow={2}>
        {vendors.map(vendor => <VendorCard key={vendor.id} vendor={vendor} />)}
      </CardGroup>
    </Segment>
  )
}

export default Vendors
