import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCXkb-vAZ2r2lHoqOraeKeTm29Fvqire9M",
    authDomain: "employeemonitoring-eca95.firebaseapp.com",
    databaseURL: "https://employeemonitoring-eca95-default-rtdb.firebaseio.com",
    projectId: "employeemonitoring-eca95",
    storageBucket: "employeemonitoring-eca95.appspot.com",
    messagingSenderId: "544401525351",
    appId: "1:544401525351:web:7ff08277ae27177c25a2c2",
    measurementId: "G-3B7TEG3T24"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);


