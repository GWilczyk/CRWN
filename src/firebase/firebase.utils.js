import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyBVWaQElMwzqmWx17dLLln_YrvdSSa9IIE',
	authDomain: 'crwn-db-b3011.firebaseapp.com',
	projectId: 'crwn-db-b3011',
	storageBucket: 'crwn-db-b3011.appspot.com',
	messagingSenderId: '1027735256487',
	appId: '1:1027735256487:web:7971bed47f839d0b958a82',
	measurementId: 'G-9TMSQ5QGRF'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const userSnapshot = await userRef.get();

	if (!userSnapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ createdAt, displayName, email, ...additionalData });
		} catch (error) {
			console.log('ERROR CREATING USER\n', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
