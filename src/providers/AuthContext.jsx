import React, { createContext, useEffect, useState } from 'react'
import firebase from '../firebase';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

  const updateUser = (user) => {
    console.log('onAuthStateChanged =>', user)
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser)
    return unsubscribe
  }, [])

  if (loading) return <div>Loading...</div>
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
