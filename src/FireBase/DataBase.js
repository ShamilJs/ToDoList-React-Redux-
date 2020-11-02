import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'


export const writeInDataBase = async(user, collections = [], collectionsActive = '', toDoList = []) => {
    if (user === '') return
    return await firebase.database().ref(`${user}/state`).set({collections: collections,
        collectionsActive: collectionsActive,
        toDoList: toDoList
    })    
};

export const readFromDataBase = async(user) => {
    if (user === '') return
    return await firebase.database().ref(`${user}/state`).once('value')
        .then(clientsList => clientsList.val())
}
