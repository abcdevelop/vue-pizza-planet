import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD0aR4nkNVfAVtGXd16GpQZyhqHeW3kIXk",
  authDomain: "vue-pizza-planet.firebaseapp.com",
  databaseURL: "https://vue-pizza-planet.firebaseio.com",
  projectId: "vue-pizza-planet",
  storageBucket: "vue-pizza-planet.appspot.com",
  messagingSenderId: "94479896889"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu')

