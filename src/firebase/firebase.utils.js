/** @format */

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  EmailAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

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

export const checkExistEmail = async (error, auth) => {
  switch (error.code) {
    case "auth/account-exists-with-different-credential":
      try {
        console.log(error.customData.email);
      } catch (error) {
        throw error;
      }

      break;
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
        photoURL: photoURL ? photoURL : null,
        creationDate: new Date(),
        id: uid,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const createOrderProfileDoc = async ({ order, id, customData }) => {
  await setDoc(doc(db, "order", id), { order, customData });
};

export const signInWithExpress = async ({ auth, provider, type }) => {
  signInWithRedirect(auth, provider);
  try {
    const result = await getRedirectResult(auth);
    signInType[type](result);
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      console.log(FacebookAuthProvider.credentialFromError(error));
      console.log(error.customData.email);
    }
    await checkExistEmail(error, type, provider, auth);
    throw error;
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
    throw new Error(error);
  }
};

export const currentUser = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve({ uid, user });
      }
    });
  });

export const signOutAuth = () => signOut(auth);
