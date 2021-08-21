import React from "react";
import "./footer.scss"

function Footer() {
  return (
    <footer className="footer">
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright ©{" "}
          <a
            href="http://www.infonetassociates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bootstrapdash.com{" "}
          </a>
          2020
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Free{" "}
          <a
            href="http://www.infonetassociates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            react admin{" "}
          </a>{" "}
          templates from https://www.infonetassociates.com/.{" "}
        </span>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
