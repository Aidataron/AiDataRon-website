import React, { Component, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../Assets/portfolio/magicbricks.PNG";
import p2 from "../Assets/portfolio/job.PNG";
import p3 from "../Assets/portfolio/oveit.PNG";
import p4 from "../Assets/portfolio/glamup.PNG";
import p5 from "../Assets/portfolio/bijika.PNG";
import p6 from "../Assets/portfolio/libartus.PNG";
import p7 from "../Assets/portfolio/gold.PNG";
import p8 from "../Assets/portfolio/nation.PNG";
import p9 from "../Assets/portfolio/adagency.PNG";
import p10 from "../Assets/p10.jpg";
import "../Styles/Slider.css";
import Card from "./Card.js";

const Slider = ({ handleCategoryAds }) => {
  const [projects, setProjects] = useState([
    {
      name: "Magic Bricks",
      link: "https://www.magicbricks.com/",
      image: p1,
    },
    {
      name: "Job and Talent",
      link: "https://www.jobandtalent.com/uk",
      image: p2,
    },
    {
      name: "Ove It",
      link: "https://oveit.com/",
      image: p3,
    },
    {
      name: "Glam Squad",
      link: "https://www.glamsquad.com/",
      image: p4,
    },
    {
      name: "Bijika",
      link: "https://www.bijikastore.com/",
      image: p5,
    },
    {
      name: "Libartus",
      link: "https://libartus.com/",
      image: p6,
    },
    {
      name: "All You Can Gold",
      link: "https://allyoucangold.com/",
      image: p7,
    },
    {
      name: "Cranky Nation",
      link: "https://crankynation.com/",
      image: p8,
    },
    {
      name: "Brew My Idea",
      link: "https://ecom.brewmyidea.com/",
      image: p9,
    },
  ]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 500"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customTransition="transform 500ms ease-in-out"
      >
        {projects.map((obj) => {
          return (
            <div className="card-container ">
              <div
                // onClick={() => handleClick(obj._id)}
                className="d-flex justify-content-center"
              >
                {/* {console.log(obj)} */}
                <Card img={obj.image} />
              </div>
              <div className="card-bar d-flex justify-content-between px-3">
                <div>
                  {/* <span className="card-bar-span">Web Project</span> */}
                  <h5 className="mt-3">{obj.name}</h5>
                </div>
                <div className="card-bar-icon">
                  {" "}
                  <a
                    href={obj.link}
                    style={{ textDecoration: "none", color: "white" }}
                    target="_blank"
                  >
                    <i class="far fa-paper-plane mt-3 "></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
