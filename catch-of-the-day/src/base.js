import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDaNbIN9mV3ZGK5v2zBGmF6yLlC2EJx1g",
  authDomain: "catch-of-the-day-b0fd4.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-b0fd4.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
