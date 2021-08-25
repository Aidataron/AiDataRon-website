import React, { Component, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../Assets/Review/ava1.jpg";
import p2 from "../Assets/Review/ava2.jpg";
import p3 from "../Assets/Review/ava3.jpg";

import p4 from "../Assets/Review/ava4.jpg";
import "../Styles/Sliderreviews.css";
import Card from "./Card.js";
// import Ava1 from "../Assets/ava1.jpg";
import Avatar from "react-avatar";

const Sliderreviews = ({ handleCategoryAds }) => {
  const [reviewers, setReviwers] = useState([
    {
      name: "Ijaz Ahmed",
      review: "Delivered before time. Very Professional and Efficient work",
      image: p1,
    },
    {
      name: "Tshibagt",
      review: "Great work and on time",
      image: p2,
    },
    {
      name: "Alex(Doomydoom)",
      review: "Great Service. Highly recommended",
      image: p3,
    },
    {
      name: "Tomertvc",
      review: "Very Good Service and Communications",
      image: p4,
    },
    {
      name: "Cryptoci",
      review: "Great Communication and Work",
      image: p1,
    },
  ]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
        {reviewers.map((obj) => {
          return (
            <div className="">
              <div className="review-card d-flex ">
                <div className="d-flex justify-content-center">
                  <div
                    className="my-2"
                    style={{ height: "100px", borderRadius: "12px" }}
                  >
                    {/* <img
                      style={{ height: "75px", borderRadius: "18px" }}
                      className="img-fluid pt-2 px-3"
                      src={Ava1}
                    /> */}
                    <Avatar className=" mx-2 " round={true} src={obj.image} />
                  </div>
                </div>
                <div className=" mt-4 text-left ml-2">
                  <h5 style={{ color: "#185a9d" }}>{obj.name}</h5>
                  <span className="text-muted"> {obj.review}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Sliderreviews;
