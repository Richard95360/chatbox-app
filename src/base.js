import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDm0D4_c_8rrO6D1MiUryP_6zxF5dQdhZk",
    authDomain: "chatbox-app-4657b.firebaseapp.com",
    databaseURL: "https://chatbox-app-4657b.firebaseio.com",

})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
