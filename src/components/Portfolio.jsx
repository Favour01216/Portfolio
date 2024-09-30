import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    JSTS: "JS",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Sneak Attack",
      projectInfo:
        "SneakAttack is a cutting-edge e-commerce platform that offers a seamless shopping experience for sneaker enthusiasts. Built with modern technologies, it ensures fast performance and secure transactions.",
      client: "Favour Adesiyan",
      technologies: "Vercel,Sanity, CSS, Stripe, JavaScript",
      industry: "Ecommerce",
      date: "JUne 16, 2024",
      url: {
        name: "DEPLOYED WEBSITE",
        link: "https://sneak-attack.vercel.app/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-1.png",
      sliderImages: [
        "images/projects/p1product-page.png",
        "images/projects/p1checkout.png",
      ],
      categories: [filters.JSTS],
    },
    {
      title: "Care For",
      projectInfo:
        "This healthcare platform streamlines patient registration, appointment scheduling, and medical record management. It offers a robust and responsive system for both patients and administrators, incorporating modern technologies like Next.js, Appwrite, and Twilio.",
      client: "Favour Adesiyan",
      technologies: "Next.js, Appwrite, TypeScript, ShadCN, Twilio, Sentry",
      industry: "Health Care",
      date: "July 16, 2024",
      url: {
        name: "CARE FOR",
        link: "https://carefor.vercel.app/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/p2-home.png",
      sliderImages: [
        "images/projects/p2-admin.png",
        "images/projects/p2-new-appointment.png",
      ],
      categories: [filters.JSTS],
    },
    {
      title: "Employee Tracker",
      projectInfo:
        "This is a command line application to be able to view and manage the departments, roles, and employees in my company in order to plan and organize a business",
      client: "Ruby Clinton",
      technologies: "node Js, Mysql, Figlet",
      industry: "Business",
      date: "July 16, 2022",
      url: {
        name: "Github Repo",
        link: "https://github.com/Favour01216/Emplyee-tracker",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-3.jpg",
      sliderImages: [
        "images/projects/project-3.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Tech-Blog",
      projectInfo:
        "This is a project created for the University of Arizona Coding Bootcamp class. The programme is a CMS-style blog site, similar to a Wordpress site, where developers may create blog articles and comment on the writings of other developers. The app's architectural framework follows the MVC paradigm, with Handlebars.js as the template language, Sequelize as the ORM, and the express-session npm package for authentication.",
      client: "University of Arizona Coding Bootcamp class",
      technologies: "Javascript,CSS, Handlebars, Shell",
      industry: "Social Media",
      date: "July 16, 2022",
      url: {
        name: "Github Repo",
        link: "https://github.com/Favour01216/Tech-blog",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-4.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-4.jpg",
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Clinical Encounter",
      projectInfo:
        "This project is a basic application to manage clinical encounter notes, enabling users to create, edit, view, and delete notes stored in a text file.",
      client: "Ruby Clinton",
      technologies: "C#, Regex, File I/O",
      industry: "Health Care",
      date: "March 16, 2024",
      url: {
        name: "Clinical Encounter",
        link: "https://github.com/Favour01216/Clinical-Encounter",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/p5.png",
      sliderImages: [
        "images/projects/p5-list.png",
        "images/projects/p5-final.png",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Project Title 6",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 7",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      client: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
