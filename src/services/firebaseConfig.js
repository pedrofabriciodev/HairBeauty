import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYtWyzLv0OUZVArA8D4V20OmNb2y43VVE",
  authDomain: "hairbeauty-d39c2.firebaseapp.com",
  projectId: "hairbeauty-d39c2",
  storageBucket: "hairbeauty-d39c2.appspot.com",
  messagingSenderId: "446624123841",
  appId: "1:446624123841:web:4edf4658663c4202773d40"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)