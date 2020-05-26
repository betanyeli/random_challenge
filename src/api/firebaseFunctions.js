import firebase from '../api/firebaseConfig';

export const GoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        console.log("Token =>", token)
        // The signed-in user info.
        const user = result.user;
        console.log("User => ", user);

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

//export default GoogleLogin;