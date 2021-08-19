import React from "react";
import { FaBars, FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./adminHeader.scss";
function AdminHeader() {
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  const toggleRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.toggle("open");
  };
  const toggleSidebarIcon = () => {
    document.querySelector(".adminPage").classList.toggle("sidebar-icon-only");
  };
  return (
    <div className="navbar p-0 d-flex align-items-center admin_header h-100 w-100">
      {/* <div className=" d-flex d-lg-none align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img
            src={require("../../../assets/images/logo-mini.svg")}
            alt="logo"
          />
        </Link>
      </div> */}
      <li className="d-none d-lg-block d-xl-block">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleSidebarIcon()}
        >
          <FaAlignJustify />
        </button>
      </li>
      <li className="d-block d-lg-none d-xl-none">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleOffcanvas()}
        >
          <FaAlignJustify />
        </button>
      </li>
    </div>
  );
}

export default AdminHeader;
