import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
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


if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app)
}

export default firebase

