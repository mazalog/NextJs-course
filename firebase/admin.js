const admin = require("firebase-admin");

const serviceAccount = require("./firebaseKey.json")
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
} catch (e) {

}

export const firestore = admin.firestore()
