import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage'

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

const db = firebase.firestore()


const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    userName: displayName,
    email: email,
    uid
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

export const addDevit = ({ avatar, content, img, userId, userName }) => {

  return db.collection('devits')
    .add({
      avatar,
      content,
      img,
      userId,
      userName,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0
    })
}

export const fetchLatestDevits = () => {
  return db.collection('devits').orderBy("createdAt", "desc")
    .get()
    .then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      }
      )
    })

}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}