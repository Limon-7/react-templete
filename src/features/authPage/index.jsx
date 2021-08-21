import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../common/components/navbar";
import Signin from "./signnin";
import SignUp from "./signup/index";

function AuthPage() {
  return (
    <div className="auth-page">
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/auth/signin" component={Signin} />
          <Route exact path="/auth/signup" component={SignUp} />
        </Switch>
      </div>
    </div>
  );
}

export default AuthPage;
