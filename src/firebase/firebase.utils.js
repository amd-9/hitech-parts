import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAa-eumYlX1M6PEr6drzJP-m3dOpH6Sbwg",
    authDomain: "hitech-parts.firebaseapp.com",
    databaseURL: "https://hitech-parts.firebaseio.com",
    projectId: "hitech-parts",
    storageBucket: "hitech-parts.appspot.com",
    messagingSenderId: "360521638770",
    appId: "1:360521638770:web:31878981cdbadf525cf3eb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;