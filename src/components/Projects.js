/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import jmowebsite from "../images/jmo-website.png";
import housing4u from "../images/Housing4u.png";
import wayfarer from "../images/Wayfarer.png";
import zootyWater from "../images/Zootywaterapp.png";
// FONTAWESOME IMPORTS 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import 'reactjs-popup/dist/index.css';

const Projects = () => {
    // Zooty Water APP
    const openPopupboxZootywater = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={zootyWater} alt="ZootyWater Project..." />
                <p>Full Stack Application built with Python, Django, PostgreSQL
                I designed this application with my business ZootyWater in mind. I wanted to display my creativity by implementing a glass theme and prompting the user to sign up and log in to place an order and make a purchase.
                <ul>
                        <li>User Authentication and Authorization</li>
                        <li>Stripe API Integration</li>
                </ul>
                </p>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://zootywaterapp.herokuapp.com")}>https://zootywaterapp.herokuapp.com</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/OhziiiLov3/zootywater", "_blank")}>https://github.com/OhziiiLov3/zootywater</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
        content,
        config: {
            titleBar: {
                text: "Zooty Water App",
            },
        },
    });
    }

    const popupboxConfigZootyWater = {
        titleBar: {
            enable: true,
            text: "Zooty Water App project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Housing 4 U
    const openPopupboxHousing4u = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={housing4u} alt="Housing4U Project..." />
                <p>Full Stack Application built with Javascript, Express, Node, Mongoose, & MongoDB
                This project focused on the implementation of RESTful APIS and CRUD concepts to reverse engineer Craigslists to streamline affordable housing to help users find housing more effectively.
                </p>
                <ul>
                    <li>Paired Programming</li>
                    <li>My responsibilities consisted of configuring and integrating Express.js, Mongoose, and MongoDB.</li>
                </ul>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://housing4you.herokuapp.com" , "_blank")}> https://housing4you.herokuapp.com</a>
                <br/>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/OhziiiLov3/HOUSING4U", "_blank")}>https://github.com/OhziiiLov3/HOUSING4U</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
        content,
        config: {
            titleBar: {
                text: "Housing4U",
            },
        },
    });
    }

    const popupboxConfigHousing4u = {
        titleBar: {
            enable: true,
            text: "Housing4U project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Wayfarer
    const openPopupboxWayfarer = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={wayfarer} alt="Wayfarer Project..." />
                <p>Team Project: Full Stack Application built with Python, Django, PostgreSQL. This project required agile practices to meet sprint deadlines and complete assigned tasks. My responsibilities for this project consisted of configuring and launching the server, coding and building the PostgreSQL DB (including ERD and Wireframes). I also played a key role in project management and utilized Verison control to successfully deploy and release the application.</p>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://project2-wayfarer.herokuapp.com/", "_blank")}> https://project2-wayfarer.herokuapp.com/</a>
                <br/>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/OhziiiLov3/wayfarer", "_blank")}>https://github.com/OhziiiLov3/wayfarer</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Wayfarer",
                },
            },
        });
    }

    const popupboxConfigWayfarer = {
        titleBar: {
            enable: true,
            text: "Wayfarer Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Jmo-website
    const openPopupboxDigipet = () => {
        const content = (
          <>
            <img
              className="project-image-popupbox"
              src={jmowebsite}
              alt="JMO Project..."
            />
            <p>
              React Application designed for a small business to book client
              appointments and offer fitness consultation
            </p>
            <b>DEMO:</b>{" "}
            <a
              className="hyper-link"
              onClick={() =>
                window.open("https://joinmyobession.netlify.app/", "_blank")
              }
            >
              https://joinmyobession.netlify.app/
            </a>
            <br />
            <b>GitHub:</b>{" "}
            <a
              className="hyper-link"
              onClick={() =>
                window.open(
                  "https://github.com/OhziiiLov3/jmo-website-v2",
                  "_blank"
                )
              }
            >
              https://github.com/OhziiiLov3/jmo-website-v2
            </a>
          </>
        );
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "JoinMyObession",
                },
            },
        });
    }

    const popupboxConfigDigipet = {
      titleBar: {
        enable: true,
        text: "JoinMyObession",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    };

    return (
      <div id="projects" className="project-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Projects</h1>
          <div className="image-box-wrapper row row-cols-auto justify-content-center">
            <div className="project-image-box" onClick={openPopupboxDigipet}>
              <img
                className="project-image"
                src={jmowebsite}
                alt="jmo Project"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            </div>

            {/*  */}
            <div className="project-image-box" onClick={openPopupboxZootywater}>
              <img
                className="project-image"
                src={zootyWater}
                alt="Zootywater App Project"
              />
              <div className="overflow"> </div>
              <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            </div>
            {/*  */}
            <div className="project-image-box" onClick={openPopupboxHousing4u}>
              <img
                className="project-image"
                src={housing4u}
                alt="Housing4u Project"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            </div>
            {/*  */}
            <div className="project-image-box" onClick={openPopupboxWayfarer}>
              <img
                className="project-image"
                src={wayfarer}
                alt="Wayfarer Project"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
            </div>
            {/*  */}
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigZootyWater} />
        <PopupboxContainer {...popupboxConfigHousing4u} />
        <PopupboxContainer {...popupboxConfigWayfarer} />
        <PopupboxContainer {...popupboxConfigDigipet} />
      </div>
    );
}

export default Projects;
