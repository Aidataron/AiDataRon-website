import React, { useState } from "react";
import "../Styles/Shared.css";
import Mainimage from "../Assets/mainimage2bgrm.png";
import Section2image from "../Assets/section2imgfinal.jpg";
import Slider from "../Components/Slider";
import Sliderreviews from "../Components/Sliderreviews";
import Sliderbrand from "../Components/Sliderbrand";
import Footer from "../Components/Footer";
import { submitMessage } from "../Connection/message";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    brandName: "",
    message: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let res = await submitMessage(values);
    console.log(res);
    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setValues({
        name: "",
        email: "",
        brandName: "",
        message: "",
      });
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>
          AiDataRon - Specialzed in Web Development and UI UX Design
        </title>
        <meta
          name="description"
          content="Aidataron provides Web development services Specialized in React js, Shopify, Squarespace Ecommerce Development, and UI UX Design"
        />
      </Helmet>
      <section style={{ height: "90vh" }} className="main">
        <div className="container">
          <div className="row">
            <div class="col-12 col-md-6  p-0" id="carousel">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active text-white">
                    <div class="row justify-content-center align-items-center text-center mt-5 mb-3">
                      <div class="col-10 mt-0 mt-md-0 mt-lg-4  ">
                        <h1 class="display-3 " id="build-brand">
                          We Build Brands
                        </h1>
                        <p>
                          --------------------------------------------------------
                        </p>
                        <p>BE A BRAND WITH AIDATARON</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-white">
                    <div class="row justify-content-center text-center mt-5 mb-3">
                      <div class="col-10 mt-0 mt-md-0 mt-lg-4   ">
                        <h1 class="display-3 ">Expand Your Business</h1>

                        {/* <h3 class="mt-4">Shift Your BUSINESS ONLINE</h3> */}
                        <p className="mt-4">
                          Shift your business with our Web development service
                          in react js , Shopify development , and Squarespace
                          development
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-white">
                    <div class="row justify-content-center text-center mt-5 mb-3">
                      <div class="col-10 mt-0 mt-md-0 mt-lg-4   ">
                        <h1 class="display-3">Get Your Business ONLINE</h1>
                        {/* <h3 class="mt-4">With our Professional Packages</h3> */}

                        <p className="mt-4">
                          We will built Online Store in Shopify or Squarespace
                          for your Business with amazing Custom Graphics and
                          your whole business will be set-up Online by AiDataRon
                        </p>

                        {/* <a href="/upcomings" class="btn btn-upcomings">
                          Explore
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item text-white">
                    <div class="row justify-content-center text-center mt-5 mb-3">
                      <div class="col-10 mt-0 mt-md-0 mt-lg-4   ">
                        <h1 class="display-3">Get Sales</h1>
                        {/* <h3 class="mt-4">
                          Set-up Your Business Online and Get Sales
                        </h3> */}
                        <p className="mt-4">
                          We will Develop Online Store on Shopify or Ecommerce
                          and Do the Digital Marketing of your brand and make
                          you a digital Brand.
                        </p>
                        {/* <a href="/upcomings" class="btn btn-upcomings">
                          Explore
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                alt="aidataron webdevelopment services company"
                className="img-fluid mt-1 mt-md-5 "
                src={Mainimage}
              />
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1629721065">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <br />
      <br />
      <br id="services" />
      <br />
      <section>
        <div className=" container">
          <strong style={{ color: "#185a9d" }}>
            <i class="fas fa-arrow-right"></i> OUR SERVICES
          </strong>
          <h3>Demand First Best Services From AiDataRon</h3>
          <br />
          <br />
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
              <div
                style={{
                  height: "350px",
                  width: "18rem",
                  // border: "1px solid grey",
                  borderRadius: "12px",
                }}
                className="d-flex justify-content-center align-items-center p-4 mb-5 card1 shadow-sm"
              >
                <div>
                  <div className="d-flex justify-content-center ">
                    <div
                      style={{
                        width: "75px",
                        height: "75px",
                      }}
                      className=" d-flex justify-content-center align-items-center card1-icon "
                    >
                      <i class="fab fa-react " style={{ fontSize: "30px" }}></i>
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <h5> React JS WEB DEVELOPMENT</h5>
                    <p>
                      {" "}
                      We provide Complex Web Apps Development services in React
                      Js at AiDataRon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3  d-flex justify-content-center">
              <div
                style={{
                  height: "350px",
                  width: "18rem",
                  // border: "1px solid grey",
                  borderRadius: "12px",
                }}
                className="d-flex justify-content-center align-items-center p-4 mb-5 card2 shadow-sm"
              >
                <div>
                  <div className="d-flex justify-content-center ">
                    <div
                      style={{
                        width: "75px",
                        height: "75px",
                      }}
                      className=" d-flex justify-content-center align-items-center card2-icon "
                    >
                      <i class="fab fa-figma" style={{ fontSize: "30px" }}></i>
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <h5>UI/UX Design</h5>
                    <p>
                      {" "}
                      We are specialized in developing amazing UI UX Designs and
                      Prototypes for the Web and Mobile Apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3  d-flex justify-content-center">
              <div
                style={{
                  height: "350px",
                  width: "18rem",
                  // border: "1psx solid grey",
                  borderRadius: "12px",
                }}
                className="d-flex justify-content-center align-items-center p-4 mb-5 card3 shadow-sm"
              >
                <div>
                  <div className="d-flex justify-content-center ">
                    <div
                      style={{
                        width: "75px",
                        height: "75px",
                      }}
                      className=" d-flex justify-content-center align-items-center card3-icon "
                    >
                      <i class="fas fa-store" style={{ fontSize: "30px" }}></i>
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <h5>Shopify / Ecommerce Development</h5>
                    <p>
                      {" "}
                      We do Ecommerce Development for Brands and Specialzed in
                      developing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3  d-flex justify-content-center">
              <div
                style={{
                  height: "350px",
                  width: "18rem",
                  // border: "1px solid grey",
                  borderRadius: "12px",
                }}
                className="d-flex justify-content-center align-items-center p-4 mb-5 card4 shadow-sm"
              >
                <div>
                  <div className="d-flex justify-content-center ">
                    <div
                      style={{
                        width: "75px",
                        height: "75px",
                      }}
                      className=" d-flex justify-content-center align-items-center card4-icon "
                    >
                      <i
                        class="fab fa-squarespace"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </div>
                  </div>
                  <br />
                  <div className="text-center">
                    <h5>Squarespace Development</h5>
                    <p>
                      {" "}
                      We are specialzed in developing Websites in Squarespace
                      here at AiDataRon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br id="about" />
      <br />
      <section>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  style={{ borderRadius: "12px" }}
                  className="img-fluid mt-1 mt-md-5 "
                  src={Section2image}
                  // style={{ width: "75%" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <br />
                <br />
                <div className="p-3 text-left">
                  <strong style={{ color: "#185a9d" }}>
                    <i class="fas fa-arrow-right"></i> About US
                  </strong>
                  <h3>Creative Design & Development</h3>
                  <p style={{ fontSize: "14px" }} className="mt-4 text-muted">
                    Here at AiDataron we do the Design and Development both in
                    very Creative Ways. We have very professional Teams of React
                    js , Shopify and Squarespace Development <br />
                    We have very Creative Team of UI UX Development. We have
                    been operating the operations since 2017 and now its been 4
                    years we have been working as successfull name in IT
                    Solutions Industry
                  </p>
                </div>
                <div>
                  <div className="row">
                    <div className="col-12 col-lg-6 d-flex mt-3">
                      <div
                        style={{
                          width: "75px",
                          height: "75px",
                        }}
                        className=" d-flex justify-content-center align-items-center card1-icon "
                      >
                        <i class="far fa-star" style={{ fontSize: "30px" }}></i>
                      </div>
                      <h5 className="text-muted mt-3 mx-3 mx-1">
                        Highly Professional
                      </h5>
                    </div>
                    <div className="col-12 col-lg-6 d-flex mt-3">
                      <div
                        style={{
                          width: "75px",
                          height: "75px",
                        }}
                        className=" d-flex justify-content-center align-items-center card1-icon "
                      >
                        <i class="far fa-star" style={{ fontSize: "30px" }}></i>
                      </div>
                      <h5 className="text-muted mt-3 mx-3 mx-5"> Creative</h5>
                    </div>
                    <div className="col-12 col-lg-6 d-flex mt-3">
                      <div
                        style={{
                          width: "75px",
                          height: "75px",
                        }}
                        className=" d-flex justify-content-center align-items-center card1-icon "
                      >
                        <i class="far fa-star" style={{ fontSize: "30px" }}></i>
                      </div>
                      <h5 className="text-muted mt-3 mx-3">Problems Solver</h5>
                    </div>
                    <div className="col-12 col-lg-6 d-flex mt-3">
                      <div
                        style={{
                          width: "75px",
                          height: "75px",
                        }}
                        className=" d-flex justify-content-center align-items-center card1-icon "
                      >
                        <i class="far fa-star" style={{ fontSize: "30px" }}></i>
                      </div>
                      <h5 className="text-muted mt-1 mx-3">
                        Clients Satisfaction
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br id="portfolio" />
      <br />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <br />
              <br />
              <div className="p-3 text-left">
                <strong style={{ color: "#185a9d" }}>
                  <i class="fas fa-arrow-right"></i> Recent Works
                </strong>
                <h3>Our Recent Projects</h3>
                <p style={{ fontSize: "14px" }} className="mt-4 text-muted">
                  We will Develop Online Store for your Business and will make
                  your business a BRAND by doing SEO and Digital Marketing and
                  will bring you loyal customers
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section>
        <br />
        <div className="container">
          <div className="jumbotron text-white">
            <div className="row">
              <div className="col-12 col-md-6 mt-4 mb-2">
                <h4>What Our Happy Clients Says about us</h4>
              </div>
              <div className="col-12 col-md-6">
                <Sliderreviews />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section>
        <div>
          <strong style={{ color: "#185a9d" }}>
            <i class="fas fa-arrow-right"></i> All time Brands
          </strong>
          <h3>Our Brands</h3>
        </div>
        <br />
        <br />
        <div className="container">
          <Sliderbrand />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br id="contact" />
      <br />

      <section className="spacer layer1">
        <div className="container">
          <strong style={{ color: "#185a9d" }}>
            <i class="fas fa-arrow-right"></i> Are you ready to be a Brand
          </strong>
          <h3>Let's Get Started Your Project Now!</h3>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-xl-4"></div>
            <div className="col-12 col-md-6 col-xl-4">
              <form>
                <div class="form-group ">
                  <label for="exampleInputEmail1">Your Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group ">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group ">
                  <label for="exampleInputEmail1">
                    Brand Name / Company Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={values.brandName}
                    name="brandName"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={values.message}
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  style={{ backgroundColor: "#185a9d", color: "white" }}
                  className="btn  "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-12 col-md-3 col-xl-4"></div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="footer-wave-parent">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
