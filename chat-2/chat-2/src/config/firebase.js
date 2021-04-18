import * as firebase from 'firebase/app'
import App from '../App'
import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDxw0oZcdHM0XC-qL_K0Cfz2whO-ZK5kXI",
    authDomain: "chat-2-a67fe.firebaseapp.com",
    projectId: "chat-2-a67fe",
    storageBucket: "chat-2-a67fe.appspot.com",
    messagingSenderId: "450484990761",
    appId: "1:450484990761:web:987b33db11063731f03d38"
}

firebase.initializeApp(firebaseConfig)

export default firebase



