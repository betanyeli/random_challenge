import React from "react";
import  { auth, provider } from "../api/firebaseConfig";
import ResultApi from './ResultApi'
import GoogleButton from 'react-google-button'

export class Login extends React.Component {
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
  console.log("entro al catch")

        // ...
      });
  }
  render() {
    return (
      <div>
        {this.state.user !== null ? <div><p>Hola, {this.state.user.displayName}</p> <ResultApi /> </div> : <p>Bienvenido a Random user's</p>}
        {this.state.user !== null ? <button onClick={this.logout}>Cerrar sesión</button> : <GoogleButton onClick={this.GoogleLogin} />}
      </div>
    );
  }
}

export default Login;
