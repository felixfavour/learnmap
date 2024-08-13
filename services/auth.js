import { auth, db } from "@/lib/firebase/client"
import { doc, setDoc, getDoc } from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

const createUserProfile = async (profile) => {
  const response = await setDoc(doc(db, "users", user.uid), profile)
  return response
}

export const signUpUser = async (profile) => {
  const response = await createUserWithEmailAndPassword(
    auth,
    profile.email,
    profile.password
  )
  delete profile.password

  await createUserProfile({
    _id: response.user.uid,
    ...profile,
  })
  return response.user
}

export const loginUser = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
  return response.user
}

export const signOutUser = async () => {
  await auth.signOut()
}

const getUserProfile = async (user) => {
  const response = await getDoc(doc(db, "users", user.uid))
  return response.data()
}
