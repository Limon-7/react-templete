import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../common/components/footer";
import Navbar from "../../common/components/navbar";

function PublicPage() {
  return (
    <div className="public-page">
      <Navbar />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      </div>
      
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