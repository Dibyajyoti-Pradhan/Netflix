import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Don't uncomment unless you know what you are doing
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCs18VvupFg3X874F1Is4RpJe8VeXedzkw",
  authDomain: "dibyajyoti-pradhan-netflix.firebaseapp.com",
  databaseURL: "https://dibyajyoti-pradhan-netflix.firebaseio.com",
  projectId: "dibyajyoti-pradhan-netflix",
  storageBucket: "dibyajyoti-pradhan-netflix.appspot.com",
  messagingSenderId: "790767011537",
  appId: "1:790767011537:web:275e637dea413ad2a367f0",
};
const firebase = Firebase.initializeApp(config);
// Don't uncomment unless you know what you are doing
// seedDatabase(firebase);
export { firebase };
