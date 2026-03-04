import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw6d3XiSp1qmosn8C8MnkPGIA3w5PQ5CQ",
  authDomain: "crickbetapp.firebaseapp.com",
  projectId: "crickbetapp",
  storageBucket: "crickbetapp.appspot.com", // ✅ ensure it's .com, not .app
  messagingSenderId: "837239943474",
  appId: "1:837239943474:web:6e1153ea3127d600b6a72b",
  measurementId: "G-E26J1FV86P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, RecaptchaVerifier };
