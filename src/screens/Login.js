import React from "react";
import firebase, { auth, provider } from "../api/firebaseConfig";
import { Button } from '@material-ui/core';

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
        {this.state.user !== null ? <p>Hola, {this.state.user.displayName}</p> : <p>Inicia sesión</p>}
        {this.state.user !== null ? <Button onClick={this.logout}>Cerrar sesión</Button> : <Button onClick={this.GoogleLogin}>Iniciar Sesión</Button>}
      </div>
    );
  }
}

export default Login;
