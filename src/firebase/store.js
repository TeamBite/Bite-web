import firebase from './'
import 'firebase/firestore'

const db = firebase.firestore()

export const Vendors = {
  getAll: async () => {
    try {
      let querySnapshot = await db.collection("venues").get()
      const vendors = querySnapshot.docs.map(doc => doc.data())
      return vendors
    } catch (err) {
      console.error(err)
    }
  }
}

const store = {
  Vendors
}

export default store;
