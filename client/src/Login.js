import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithRedirect(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="/logo.png" alt="" width="250" height="500" />
        <h1 align="center"> Let's Hangout</h1>
      </div>

      <Button onClick={signIn}>Sign In With Google</Button>
    </div>
  );
}

export default Login;
