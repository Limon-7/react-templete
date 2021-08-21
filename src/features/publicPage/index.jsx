import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../common/components/footer";
import Navbar from "../../common/components/navbar";

import "./publicPage.scss"
function PublicPage() {
  return (
    <div className="public-page">
      <Navbar />
      <div className="main">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      </div>
      <i className="fab fa-adversal"></i>
      <Footer />
    </div>
  );
}

export default PublicPage;

function Home(){
  return(
    <div><h3>publick page</h3></div>
  )
}