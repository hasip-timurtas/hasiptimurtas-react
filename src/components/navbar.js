import React from "react";
import { Link } from "react-router-dom";

const navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img className="block" id="u1235_img" src="img/logo1.png" alt="" width="72" height="80" />
          </Link>
        </div>

        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">
              Videos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
