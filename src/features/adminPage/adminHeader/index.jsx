import React from "react";
import { FaBars } from "react-icons/fa";

import "./adminHeader.scss";
function AdminHeader() {
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  const toggleRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.toggle("open");
  };
  return (
    <div className="container-fluid admin-header">
      <nav className="navbar">
        <li>
          <FaBars />
        </li>
        <li>
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </li>
      </nav>
    </div>
  );
}

export default AdminHeader;
