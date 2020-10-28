// import React, { useState } from 'react';
import firebase from 'firebase/app';
// import { useAutorization } from './UseAutorization';
import 'firebase/auth';
// import { useState } from 'react';

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

export const authUser = async(email, password) => {
    try {
        const data = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(data.user.uid)
    } catch (error) {
        console.log(error.message)
    }
}   

export const regUser = async(email, password) => {
    try {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(data.user.uid)
    } catch (error) {
        console.log(error.message)
    }
} 