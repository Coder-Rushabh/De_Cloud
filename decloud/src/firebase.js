import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAiSN2BdThsA-8v0kLywWoiR4Nds7cXX9Y",
    authDomain: "decloud-58b06.firebaseapp.com",
    projectId: "decloud-58b06",
    storageBucket: "decloud-58b06.appspot.com",
    messagingSenderId: "576357150653",
    appId: "1:576357150653:web:b3f64b16451dd64068acd4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;