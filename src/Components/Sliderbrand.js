import React, { Component, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../Assets/brand1.png";
import p2 from "../Assets/brand2.png";
import p3 from "../Assets/brand3.png";
import p4 from "../Assets/brand4.png";
import p5 from "../Assets/brand5.png";
import p6 from "../Assets/brand6.png";
import p7 from "../Assets/brand7.png";
import p8 from "../Assets/brand8.png";
import p9 from "../Assets/brand9.png";
import p10 from "../Assets/brand10.png";
import p11 from "../Assets/brand11.png";
import p12 from "../Assets/brand12.png";
import p13 from "../Assets/brand13.png";
import p14 from "../Assets/brand14.png";
import "../Styles/Slider.css";
import Card from "./Card.js";

const Slider = ({ handleCategoryAds }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const [categories, setCategories] = useState();

  // const handleClick = async (id) => {
  //   console.log(id);
  //   let res = await getAdsByCategories({ id });
  //   console.log(res);
  //   handleCategoryAds(res.data);
  // };

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     let foundCategories = await getCategories();
  //     console.log(foundCategories);
  //     setCategories(foundCategories.data.categories);
  //   };

  //   fetchCategories();
  // }, []);
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
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customTransition="transform 500ms ease-in-out"
      >
        {[p14, p13, p12, p11, p9, p10, p1, p2, p3, p4, p5, p6, p7, p8].map(
          (obj) => {
            return (
              <>
                <img style={{ width: "auto", height: "auto" }} src={obj} />
              </>
            );
          }
        )}
      </Carousel>
    </>
  );
};

export default Slider;
