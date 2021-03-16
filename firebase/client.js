import firebase from "firebase/app"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTegPzNPTSwcQ6IvhsxE-AgF5KFJiPtp8",
  authDomain: "mazasocial.firebaseapp.com",
  projectId: "mazasocial",
  storageBucket: "mazasocial.appspot.com",
  messagingSenderId: "674613201997",
  appId: "1:674613201997:web:4b4f6c9d41f8ec3e006004",
  measurementId: "G-XN84E4ZLDM",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email: email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().
    onAuthStateChanged((user) => {
      const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGithHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}
