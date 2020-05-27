import firebase from 'firebase/app';
import 'firebase/auth';



const  firebaseConfig = {
    apiKey: "AIzaSyBwtQc2fPcoD9sFSARZn_h5fW6JTIin4b8",
    authDomain: "random-users-challenge.firebaseapp.com",
    databaseURL: "https://random-users-challenge.firebaseio.com",
    projectId: "random-users-challenge",
    storageBucket: "random-users-challenge.appspot.com",
    messagingSenderId: "696399636802",
    appId: "1:696399636802:web:55537a52e18102bc66c0db"
  };

  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth()

  export const GoogleLogin = () => {
    
    auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        console.log("Token =>", token)
        // The signed-in user info.
        const user = result.user;
        console.log("User => ", user);
        
        if (user !== null){
          console.log(user.displayName)
        } else {
          console.log("cabros esto no prendió")
        }
       

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("ErrorCode => ", errorCode);

        const errorMessage = error.message;
        console.log("ErrorMessage => ", errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log("Email => ", email);

        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log("Credential =>", credential);

        // ...
    });
}

  //export default firebase;
