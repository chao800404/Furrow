/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, addDoc, writeBatch } from "firebase/firestore";

import { doc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNL_a7tt8kKKxsZ0lPIhKy7Ot0YT7bdps",
  authDomain: "onesec-859e7.firebaseapp.com",
  projectId: "onesec-859e7",
  storageBucket: "onesec-859e7.appspot.com",
  messagingSenderId: "341526711924",
  appId: "1:341526711924:web:5d121e8f33c22491de8b21",
  measurementId: "G-6YP5G65346",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
