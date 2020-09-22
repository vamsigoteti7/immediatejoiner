const admin = require("firebase-admin");

var serviceAccount = require("../immediatejoiner-firebase-adminsdk-g66wx-610caa53bf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://immediatejoiner.firebaseio.com",
  storageBucket: "gs://immediatejoiner.appspot.com"
});

const db = admin.firestore();
var settings = { experimentalForceLongPolling: true, timestampsInSnapshots: true }; // force Timestamp object instead of Date

db.settings(settings);

module.exports = { admin, db };