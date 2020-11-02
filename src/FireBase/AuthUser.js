import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: "AIzaSyDy9BSdaY9oU3VPzQUGZiFiXPCExhv33Fs",
	authDomain: "todolist-a22c4.firebaseapp.com",
	databaseURL: "https://todolist-a22c4.firebaseio.com",
	projectId: "todolist-a22c4",
	storageBucket: "todolist-a22c4.appspot.com",
	messagingSenderId: "770915980359",
	appId: "1:770915980359:web:7e79a8af69075ba7ce8d62"
});

export const regUser = async(email, password) => 
	await firebase.auth().createUserWithEmailAndPassword(email, password); 

export const updateProfile = async displayName => {
	const user = await firebase.auth().currentUser;
	user.updateProfile({ displayName });
	localStorage.setItem('userId', JSON.stringify(user.uid));
	return user;
};

export const authUser = async(email, password) => {
	const data = await firebase.auth().signInWithEmailAndPassword(email, password);
	localStorage.setItem('userId', JSON.stringify(data.user.uid));
	return data.user;  
}

export const exitTheApp = async() => 
	await firebase.auth().signOut();

export const checkAuthorization = async(localUser, setLocal) => {
	try {
		await firebase.auth().onAuthStateChanged(user => {
			if (user !== null) {
				if (user.uid === localUser) {
					setLocal({name: user.displayName, id: user.uid});
					return
				} 
			} else return
		})
	} catch (error) {
        console.log(error.message)
	}
};