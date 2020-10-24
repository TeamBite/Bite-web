import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from 'semantic-ui-react'
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
  console.log('vendors', vendors)
  return (
    <div>
      <Header>Vendors</Header>
      {vendors.map(vendor => <VendorCard vendor={vendor} />)}
    </div>
  )
}

export default Vendors
