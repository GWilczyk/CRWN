import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBVWaQElMwzqmWx17dLLln_YrvdSSa9IIE',
	authDomain: 'crwn-db-b3011.firebaseapp.com',
	projectId: 'crwn-db-b3011',
	storageBucket: 'crwn-db-b3011.appspot.com',
	messagingSenderId: '1027735256487',
	appId: '1:1027735256487:web:d62c76f2f011c193958a82',
	// measurementId: 'G-75CWPR2190',
};

console.log('Firebase initialisation…');
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
