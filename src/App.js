import React from "react";
import { auth, provider } from "./api/firebaseConfig";
import { Button, Avatar, AppBar } from "@material-ui/core";
import ResultApi from "./screens/ResultApi";
import GoogleButton from "react-google-button";
import Home from "./screens/Home";
import "./App.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,

  
    };
    this.GoogleLogin = this.GoogleLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logout() {
    auth.signOut().then((result) => {
      this.setState({
        user: null,
      });
    });
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
        console.log("Err =>", error);
      });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="container">
        {user !== null ? (
          <div>
            <AppBar className="Appbar" position="static">
            <Avatar alt="Profile Image" src={user.photoUrl} />
            <p>Welcome, {user.displayName}</p>
            <Button onClick={this.logout} color="inherit">SIGN OUT</Button>
            </AppBar>

            <ResultApi />

          </div>
        ) : (
          <React.Fragment>
            <Home />
            <div className="child">
              <GoogleButton onClick={this.GoogleLogin} />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
