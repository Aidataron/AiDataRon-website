import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Logoaidataron from "../Assets/ailogo1.png";
import "../Styles/Shared.css";

const Navbar = () => {
  return (
    <div className="main">
      <nav class="navbar  navu navbar-expand-lg navbar-dark ">
        <div className="container">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            class="nav-link"
            to="/"
          >
            <img
              className="img-fluid"
              style={{ height: "40px", width: "40px" }}
              src={Logoaidataron}
              alt="aidataron"
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-4 mr-auto">
              <li class="nav-item active">
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  class="nav-link"
                  to="/"
                >
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li
                class="nav-item active nav-link"
                onClick={() => window.location.replace("/#services")}
              >
                Services <span class="sr-only">(current)</span>
              </li>
              <li
                class="nav-item active nav-link"
                onClick={() => window.location.replace("/#portfolio")}
              >
                Portfolio <span class="sr-only">(current)</span>
              </li>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                // class="nav-link"
                to="/about"
              >
                <li class="nav-item active nav-link">
                  About <span class="sr-only">(current)</span>
                </li>
              </NavLink>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}

            <button
              style={{ backgroundColor: "#185a9d", color: "white" }}
              className="btn  "
              onClick={() => window.location.replace("/#contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
