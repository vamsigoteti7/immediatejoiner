const admin = require("firebase-admin");

var serviceAccount = require("../immediatejoiner-firebase-adminsdk-g66wx-610caa53bf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://immediatejoiner.firebaseio.com",
  storageBucket: "gs://immediatejoiner.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };