import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXNN19o3AWZOPdMqpUtMtqZPgNOEiDX4w",
  authDomain: "vmf-dao.firebaseapp.com",
  databaseURL: "https://vmf-dao-default-rtdb.firebaseio.com",
  projectId: "vmf-dao",
  storageBucket: "vmf-dao.appspot.com",
  messagingSenderId: "155377287746",
  appId: "1:155377287746:web:653c3327b6b27d383263db",
  measurementId: "G-NF6PRHWV7M",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db, auth };
