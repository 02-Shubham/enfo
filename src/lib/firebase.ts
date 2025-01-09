import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace this config with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtP1L31uAngLLhrRTVSZoG5SlwZsjJnUM",
  authDomain: "enfo-e4518.firebaseapp.com",
  projectId: "enfo-e4518",
  storageBucket: "enfo-e4518.firebasestorage.app",
  messagingSenderId: "912169324987",
  appId: "1:912169324987:web:4a7e06eee3dfe84dedf49e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);