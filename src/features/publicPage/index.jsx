import React from "react";
import { Switch } from "react-router-dom";
import Footer from "../../common/components/footer";
import Navbar from "../../common/components/navbar";

function PublicPage() {
  return (
    <div className="public-page">
      <Navbar />
      {/* <Switch>
        <Route exact />
      </Switch> */}
      <h1>Public Page</h1>
      <Footer />
    </div>
  );
}

export default PublicPage;
