import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDFwsfC0bdRJIHC3ro2uo0lbgX_oIucLaE",
  authDomain: "kevinsawpoop.firebaseapp.com",
  databaseURL: "https://kevinsawpoop.firebaseio.com",
  projectId: "kevinsawpoop",
  storageBucket: "kevinsawpoop.appspot.com",
  messagingSenderId: "396104102260"
});
const db = firebaseApp.database();

export default db;
