import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA428v9MVYhJc2fQZ2WvsKqr9uZCdRiZLo",
//   authDomain: "chatapp-8b90d.firebaseapp.com",
//   projectId: "chatapp-8b90d",
//   storageBucket: "chatapp-8b90d.appspot.com",
//   messagingSenderId: "14108660781",
//   appId: "1:14108660781:web:2917dc54cc5d1b0ee5d4a4",
// };

const app = initializeApp(firebaseConfig);

export default app;
