// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
	.initializeApp({ databaseURL: 'https://mercury-fb87e.firebaseio.com/' })
	.database()
