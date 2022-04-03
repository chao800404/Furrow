/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

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

export const collectionSnapshot = async () =>
  await getDocs(collection(db, "collections"));

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
