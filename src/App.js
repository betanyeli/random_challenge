import React from "react";
import  { auth, provider } from "./api/firebaseConfig";
import ResultApi from './screens/ResultApi'
import GoogleButton from 'react-google-button'
import Home from './screens/Home'
import './App.css'

export class App extends React.Component {
  constructor() {
    super();
      this.state = {
        user: null,
      }
      this.GoogleLogin = this.GoogleLogin.bind(this)
      this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      }
    })
  }

  logout() {
    auth.signOut().then((result) => {
      this.setState({
        user: null
      })
    })
  }

  GoogleLogin() {
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        const user = result.user;
        console.log("User => ", user);

        this.setState({ user: user });
      })
      .catch(function (error) {
        // Handle Errors here.
  console.log("Err =>",  error)

      });
  }
  render() {
    return (
      <div>
        {this.state.user !== null ? <div><p>Welcome, {this.state.user.displayName}</p> <ResultApi /> </div> : <Home />}
        {this.state.user !== null ? <button onClick={this.logout}>Sign Out</button> : <GoogleButton onClick={this.GoogleLogin} />}
      </div>
    );
  }
}

export default App;
