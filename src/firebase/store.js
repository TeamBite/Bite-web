import firebase from './'
import 'firebase/firestore'

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
      let docSnapshot = await db.collection('venues').doc(id).get()
      let doc = docSnapshot.data()
      return doc
    } catch (err) {
      console.log('err', err)
    }
  }
}

const store = {
  Vendors
}

export default store;
