import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminFooter from "./adminFooter";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSideBar/adminSidebar";

import { FaSadCry } from "react-icons/fa";

import "./adminPage.scss";

const Menu1 = () => {
  return (
    <div className="menu1">
      <h4>Menu1</h4>
    </div>
  );
};
const Menu2 = () => {
  return (
    <div className="menu2">
      <h4>Menu2</h4>
    </div>
  );
};
const Menu3 = () => {
  return (
    <div className="menu3">
      <h4>Menu3</h4>
    </div>
  );
};
function AdminPage() {
  return (
    <div className="adminPage d-flex no-wrap ">
      <div id="sidebar" className="adminPage__sidebar">
        <AdminSidebar />
      </div>
      <div className="adminPage__main">
        <div className="adminPage__main__header">
          <AdminHeader />
        </div>
        <div className="content-wrapper">
          <Switch>
            <Route path="/admin/dashboard" component={Menu1} />
            <Route path="/admin/menu2" component={Menu2} />
            <Route path="/admin/menu3" component={Menu3} />
          </Switch>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
