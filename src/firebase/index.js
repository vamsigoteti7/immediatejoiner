import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  projectId: "immediatejoiner",
  databaseURL: "https://immediatejoiner.firebaseio.com",
  storageBucket: "gs://immediatejoiner.appspot.com"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
