import firebase from './index'


export const logInPatron = (phoneNumber, verifier) => firebase.auth().signInWithPhoneNumber(phoneNumber, verifier)
export const signOut = () => firebase.auth().signOut()
