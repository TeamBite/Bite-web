import firebase from './'
import 'firebase/firestore'

const { Timestamp } = firebase.firestore
const db = firebase.firestore()

export const Vendors = {
  getAll: async () => {
    try {
      let querySnapshot = await db.collection("venues").get()
      const vendors = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      return vendors
    } catch (err) {
      console.error(err)
    }
  },

  getById: async (id) => {
    try {
      let docRef = db.collection('venues').doc(id)
      let doc = (await docRef.get()).data()

      let offersRef = await docRef.collection('offers').get()
      let offers = offersRef.docs.map(doc => doc.data())
      let remainingOffers = offers.filter(offer => offer.endTime.valueOf() > Timestamp.now().valueOf())
      return {
        ...doc,
        offers: remainingOffers
      }
    } catch (err) {
      console.log('err', err)
    }
  }
}

const store = {
  Vendors
}

export default store;
