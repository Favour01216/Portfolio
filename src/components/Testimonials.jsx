import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Dennis Jacques",
      position: "User from Toronto",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "Working with Favour was an absolute pleasure. They were extremely knowledgeable and capable of handling all aspects of our project, from front-end design to back-end development and database management. They delivered on time and on budget, and the end result exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Jay Shah",
      position: "course mate from Toronto",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "We had a tight deadline for our project, and Favour was able to deliver on time and without compromising quality. They were able to work quickly and efficiently while still maintaining attention to detail and producing high-quality work. We're extremely satisfied with the end result and would definitely work with them again.",
      rating: 5,
    },
    {
      name: "Patrick Cary",
      position: "schoolmate from waterloo ",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "The level of expertise and professionalism demonstrated by Favour was outstanding. They were able to take our project from concept to completion with ease, and the end result was a fully functional and visually appealing application. They were also very communicative throughout the project and were always available to answer any questions we had. We highly recommend them to anyone in need of a full stack developer.",
      rating: 5,
    },
    {
      name: "Chris Tom",
      position: "User from UK",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "We had a very complex project that required a high level of technical expertise and attention to detail.Favour was up to the task and then some. They provided valuable input throughout the project and were able to troubleshoot and solve any issues that arose. We're thrilled with the final product and would highly recommend them",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Client Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
