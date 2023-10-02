import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

export const Firebase = initializeApp(firebaseConfig)
export const auth = getAuth();
export const provider = new GoogleAuthProvider()