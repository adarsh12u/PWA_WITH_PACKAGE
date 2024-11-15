import { initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqCZucYSsAk1aa23rDX5gIwVI_yclrY_c",
  authDomain: "pwa-notification-ff669.firebaseapp.com",
  projectId: "pwa-notification-ff669",
  storageBucket: "pwa-notification-ff669.firebasestorage.app",
  messagingSenderId: "859416064565",
  appId: "1:859416064565:web:25f52bee9d3abf384bf77c",
  measurementId: "G-9C7KBPF5GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const messaging = getMessaging(app)


export const genratetoken = async () => {
    const permission = await Notification.requestPermission();
     console.log(permission)
}