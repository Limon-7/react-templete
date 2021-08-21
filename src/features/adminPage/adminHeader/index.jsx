import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaBars, FaAlignJustify ,FaAngleDown} from "react-icons/fa";
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
    <div className="navbar p-0 d-flex align-items-center admin_header h-100">
      <ul className="d-flex align-items-center justify-content-between w-100">
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
      <Dropdown  as="li" className="nav-item m-r-2 d-inline-block">
              <Dropdown.Toggle as="a" className="nav-link cursor-pointer no-caret">
                <div className="navbar-profile">
                  {/* <img className="img-xs rounded-circle" src={require('../../assets/images/faces/face15.jpg')} alt="profile" /> */}
                  <p className="navbar-profile-name">Limon </p>
                  
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <h6 className="p-3 mb-0">Profile</h6>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Settings</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}  className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Log Out</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <p className="p-3 mb-0 text-center">Advanced settings</p>
              </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  );
}

export default AdminHeader;
