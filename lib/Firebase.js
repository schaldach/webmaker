import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAv_XUciDu9hL_jOiRZf_ran3BUrK2vlis",
  authDomain: "webmaker-f61db.firebaseapp.com",
  projectId: "webmaker-f61db",
  storageBucket: "webmaker-f61db.appspot.com",
  messagingSenderId: "84563708185",
  appId: "1:84563708185:web:16913770b3de8fd154dd88",
  measurementId: "G-LKSCEDR4Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);