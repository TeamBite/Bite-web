import React from 'react'
import { useEffect, useState } from 'react'
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
  }, [])
  if (vendor) {
    return (
      <div>
        <h1>{vendor.name}</h1>
      </div>
    )
  } else {
    return (<p>Loading...</p>)
  }
}

export default VendorPage
