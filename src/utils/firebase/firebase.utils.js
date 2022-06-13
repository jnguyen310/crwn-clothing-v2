import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbqsLDDgHSbwWpoGg_HJZvqjKV-VGDrEE',
  authDomain: 'crwn-clothing-db-b42fa.firebaseapp.com',
  projectId: 'crwn-clothing-db-b42fa',
  storageBucket: 'crwn-clothing-db-b42fa.appspot.com',
  messagingSenderId: '644305413900',
  appId: '1:644305413900:web:f82d1e627a335eddbf0b29',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googlProvider = new GoogleAuthProvider();

googlProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googlProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googlProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) {
    return;
  }

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log('there was an error in getting user doc', err.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};
