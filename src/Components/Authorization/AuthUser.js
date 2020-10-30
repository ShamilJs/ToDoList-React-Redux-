import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyDy9BSdaY9oU3VPzQUGZiFiXPCExhv33Fs",
	authDomain: "todolist-a22c4.firebaseapp.com",
	databaseURL: "https://todolist-a22c4.firebaseio.com",
	projectId: "todolist-a22c4",
	storageBucket: "todolist-a22c4.appspot.com",
	messagingSenderId: "770915980359",
	appId: "1:770915980359:web:7e79a8af69075ba7ce8d62"
};


firebase.initializeApp(firebaseConfig);

export const authUser = async(email, password, setValue, setMessage) => {

    try {
		const data = await firebase.auth().signInWithEmailAndPassword(email, password);
		setValue({name: data.user.displayName, id: data.user.uid});
		localStorage.setItem('userId', JSON.stringify(data.user.uid));
		return
    } catch (error) {
		setMessage({ on: true, text: error.message})
    }
}   

export const regUser = async(email, password, displayName, setValue, setMessage) => {
    try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);	
        const user = await firebase.auth().currentUser;
		user.updateProfile({ displayName })
		.then(() => {
			setValue({name: user.displayName, id: user.uid});
			setMessage({ on: false, text: ''})
			localStorage.setItem('userId', JSON.stringify(user.uid));
			return
			})
    } catch (error) {
		setMessage({ on: true, text: error.message})
    }
} 

export const exitTheApp = async(setValue, setMessage) => {
	try {
		await firebase.auth().signOut()
			.then(() => {
				setValue(false);
				localStorage.setItem('userId', JSON.stringify(''));
				setMessage({ on: false, text: ''})
				setValue(true);
				return
			})
	} catch (error) {
		setMessage({ on: true, text: error.message})
	}
}

export const checkAuthorization = async(localUser, setLocal) => {
	try {
		await firebase.auth().onAuthStateChanged(user => {
			if (user !== null) {
				if (user.uid === localUser) {
					setLocal({name: user.displayName, id: user.uid});
					return
				} 
			} else {
				return
			}

		})
	} catch (error) {
        console.log(error.message)
	}
}