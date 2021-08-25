import React, { useEffect } from "react";
import Logoaidataron from "../Assets/ailogo1.png";
import "../Styles/footer.css";
// import Animation from "../../node_modules/kute.js";
import { Link, NavLink, useHistory } from "react-router-dom";

const Footer = () => {
  // const tween = window.kute.fromTo(
  //   "#blob1",
  //   { path: "#blob1" },
  //   { path: "#blob2" },
  //   { repeat: 999, duration: 3000, yoyo: true }
  // );

  useEffect(() => {
    console.log(window.user, "user");
    // tween.start();
  }, []);
  return (
    <div
      style={{
        height: "350px",
        width: "100%",
        backgroundColor: "rgba(67, 206, 162, 0.7)",
      }}
      className="py-4"
    >
      <div className="container-fluid">
        <div className="row text-left mb-4 mt-4">
          <div className="col-12 col-md-4 text-center ">
            <div class="row">
              <div className="col-12">
                <div className="text-center text-white">
                  <img
                    className="img-fluid"
                    style={{ height: "75px", width: "75px" }}
                    src={Logoaidataron}
                    alt="aidataron"
                  />{" "}
                  <h3>AiDataRon</h3>
                </div>
              </div>
              <div class="col-12">
                <div class=" follow text-white mt-5 mb-4 mb-md-0 d-flex-col justify-content-center align-items-center">
                  <h5>
                    <strong>Contact us </strong>
                  </h5>
                  <a
                    style={{ color: "white" }}
                    href="https://www.facebook.com/Aidataron-103710027786096/"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a
                    style={{ color: "white" }}
                    href="http://www.twitter.com/aidataron"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    style={{ color: "white" }}
                    href="http://instagram.com/aidataronofficial"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    style={{ color: "white" }}
                    href="https://wa.me/923138309256"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <a
                    style={{ color: "white" }}
                    href="https://www.linkedin.com/company/aidataronofficial/"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4" style={{ heigth: "100%" }}></div>
          <div className="col-12 col-md-4 text-center ">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              class="nav-link mt-1 mt-md-5"
              to="/privacypolicy"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
