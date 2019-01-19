import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTWbvIkEIcg9jIiabAuddvj8zCi-vYAvk",
    authDomain: "rreport-d8551.firebaseapp.com",
    databaseURL: "https://rreport-d8551.firebaseio.com",
    projectId: "rreport-d8551",
    storageBucket: "rreport-d8551.appspot.com",
    messagingSenderId: "958276212451"

};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()

