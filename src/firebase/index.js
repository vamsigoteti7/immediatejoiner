import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  projectId: "immediatejoiner",
  databaseURL: "https://immediatejoiner.firebaseio.com",
  storageBucket: "gs://immediatejoiner.appspot.com",
  apiKey: "AIzaSyAvzH8N2s0S5saHqZfw7YQp7FGbCqOCwT8",
  authDomain: "immediatejoiner.firebaseapp.com",
  messagingSenderId: "915227977474",
  appId: "1:915227977474:web:01bb7194b30a5ce971441b",
  measurementId: "G-XL3RX2KLBW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {

  auth.signInWithPopup(provider);


};


export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`IMRegister/${user.uid}`);
  const snapshot = await userRef.get();
  const loginTypeValue = localStorage.getItem('tabindex') ? Number(localStorage.getItem('tabindex')) : 0;
  const loginType = loginTypeValue === 0 ? 'Candiate' : 'Recruiter';
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        "username": email,
        photoURL,
        "usertype": loginType,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`IMRegister/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

const storage = firebase.storage();

const storageRef = storage.ref();

export { storage, storageRef, firebase as default };
