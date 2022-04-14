/** @format */

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  linkWithRedirect,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  EmailAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNL_a7tt8kKKxsZ0lPIhKy7Ot0YT7bdps",
  authDomain: "onesec-859e7.firebaseapp.com",
  projectId: "onesec-859e7",
  storageBucket: "onesec-859e7.appspot.com",
  messagingSenderId: "341526711924",
  appId: "1:341526711924:web:5d121e8f33c22491de8b21",
  measurementId: "G-6YP5G65346",
};

initializeApp(firebaseConfig);
export const db = getFirestore();

export const snapshot = async (collections) =>
  await getDocs(collection(db, collections));

export const collectionToMap = (collectionSnapshot) => {
  let map = [];
  collectionSnapshot.forEach((collection) => {
    map.push(collection);
  });
  return map.map((collection) => {
    const { title, item, colorType, statement } = collection.data();
    return {
      title,
      item,
      id: collection.id,
      colorType,
      statement,
      routeName: encodeURI(title.toUpperCase()),
    };
  });
};

export const shopPageToMap = (ref) => {
  let map = [];
  ref.forEach((shopPageData) => {
    map = [...map, shopPageData.data()];
  });
  return map.reduce((acc, item) => {
    acc[item.sunGlassesType.toUpperCase()] = item;
    return acc;
  }, {});
};

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth();

const signInType = {
  google: (result) => GoogleAuthProvider.credentialFromResult(result),
  facebook: (result) => FacebookAuthProvider.credentialFromResult(result),
  email: (result) => EmailAuthProvider.credentialFromResult(result),
};

const checkExistEmail = (error, type = null, provider = null) => {
  switch (error.code) {
    case "auth/account-exists-with-different-credential":
      return async () => {
        try {
          const result = await linkWithRedirect(auth.currentUser, provider);
          signInType[type](result);
          const user = result.user;
          return user;
        } catch (error) {
          console.log(error);
        }
      };
    case "auth/email-already-in-use":
      return alert("Email already in use");
    case "auth/user-not-found":
      return alert("Could not find your account!");
    case "auth/wrong-password":
      return alert("Please enter correct password");
    default:
      return error;
  }
};

export const createUserProfileDoc = async (userData) => {
  if (!userData) return;
  const { uid, user } = userData;
  const userRef = doc(db, "user", uid);
  const useSnapshot = await getDoc(userRef);
  try {
    if (!useSnapshot.exists()) {
      const { displayName: name, email, photoURL } = user;
      await setDoc(doc(db, "user", uid), {
        name,
        email,
        photoURL,
        creationDate: new Date(),
        id: uid,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signInWithExpress = async ({ auth, provider, type }) => {
  signInWithRedirect(auth, provider);
  try {
    const result = await getRedirectResult(auth);
    signInType[type](result);
  } catch (error) {
    checkExistEmail(error, type, provider);
  }
};

export const createUserWithEmail = async ({ auth, email, password, type }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser);
  } catch (error) {
    checkExistEmail(error, type);
  }
};

export const signInWithEmail = async ({ auth, email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    checkExistEmail(error);
  }
};

export const sendRestEmail = async ({ auth, email }) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    checkExistEmail(error);
  }
};

export const currentUser = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve({ uid, user });
      } else {
        reject("not sign in");
      }
    });
  });

export const signOutAuth = () => signOut(auth);
