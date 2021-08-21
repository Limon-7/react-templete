import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../../common/components/navbar";

import "./publicPage.scss";
function PublicPage() {
  return (
    <div className="public-page">
      <Navbar />
      <div className="main">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home2" component={Home2} />
        </Switch>
      </div>
    </div>
  );
}

export default PublicPage;

function Home() {
  return (
    <div>
      <h3>publick page</h3>
    </div>
  );
}
function Home2() {
  return (
    <div>
      <h3>Menu 2 page page</h3>
    </div>
  );
}
