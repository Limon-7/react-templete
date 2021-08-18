import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminFooter from "./adminFooter";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSideBar/adminSidebar";

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
    <section>
      <AdminHeader />
      <div className="admin-main side-nav-icon">
        <div className="admin-main__sidenav">
          <AdminSidebar />
        </div>
        <div className="admin-main__dashboard">
          <Switch>
            <Route path="/admin/menu1" component={Menu1} />
            <Route path="/admin/menu2" component={Menu2} />
            <Route path="/admin/menu3" component={Menu3} />
          </Switch>
          <AdminFooter />
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
