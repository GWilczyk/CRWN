import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC4qbgDA2MRJW8AzQgjTUd1lWiNB0dcmKY',
	authDomain: 'crwn-db-8f19f.firebaseapp.com',
	databaseURL: 'https://crwn-db-8f19f.firebaseio.com',
	projectId: 'crwn-db-8f19f',
	storageBucket: 'crwn-db-8f19f.appspot.com',
	messagingSenderId: '252594700782',
	appId: '1:252594700782:web:da47a2f956b05642bf8eff',
	// measurementId: 'G-PXB8TW1TJ1',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
