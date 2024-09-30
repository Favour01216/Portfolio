import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web development",
      desc: "Full-stack developers can use a variety of programming languages, frameworks, and databases to build responsive and dynamic online applications.",
      icon: "fas fa-desktop",
    },
    {
      name: "mobile Development",
      desc: "Cross-platform mobile applications can be made by full-stack developers utilising frameworks like React Native and Flutter.",
      icon: "fas fa-mobile-screen-button",
    },
    {
      name: "API development",
      desc: "APIs are created, updated, and maintained by full-stack developers so that software systems can communicate with one another.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "DevOps",
      desc: "By establishing CI/CD pipelines, implementing infrastructure as code, and monitoring and logging applications, DevOps tools and practises automate the software development lifecycle.",
      icon: "fa-solid fa-laptop-code",
    },
    {
      name: "Cloud computing",
      desc: "Web application and API deployment to cloud platforms, management of virtual machines, containers, and serverless architectures, and assurance of scalability, security, and dependability are all capabilities of full-stack developers.",
      icon: "fas fa-cloud",
    },
    {
      name: "Consulting and troubleshooting",
      desc: "Full-stack developers can assist firms with problem-solving and the selection of the ideal technology stack, architecture, and development processes.",
      icon: "fas fa-screwdriver-wrench",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
