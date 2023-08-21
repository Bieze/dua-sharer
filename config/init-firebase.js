import { initializeApp, getApps } from "firebase/app";


firebaseConfig = {
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};


export const app = initializeApp(firebaseConfig);