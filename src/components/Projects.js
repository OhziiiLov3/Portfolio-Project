import React from 'react';
import digipet from "../images/Digipet.png";
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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://zootywaterapp.herokuapp.com")}>https://zootywaterapp.herokuapp.com</a>
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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://housing4you.herokuapp.com" , "_blank")}> https://housing4you.herokuapp.com</a>
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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://project2-wayfarer.herokuapp.com/", "_blank")}> https://project2-wayfarer.herokuapp.com/</a>
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

    // DigiPet
    const openPopupboxDigipet = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={digipet} alt="Wayfarer Project..." />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>DEMO:</b> <a className="hyper-link" onClick={() => window.open("https://pages.git.generalassemb.ly/kbaskerville/ZootyMon/", "_blank")}> https://pages.git.generalassemb.ly/kbaskerville/ZootyMon//</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Digipet",
                },
            },
        });
    }

    const popupboxConfigDigipet = {
        titleBar: {
            enable: true,
            text: "DigiPet."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="projects" className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxZootywater}>
                        <img className="project-image" src={zootyWater} alt="Zootywater App Project" />
                        <div className="overflow"> </div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="project-image-box" onClick={openPopupboxHousing4u}>
                        <img className="project-image" src={housing4u} alt="Housing4u Project" />
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="project-image-box" onClick={openPopupboxWayfarer}>
                        <img className="project-image" src={wayfarer} alt="Wayfarer Project" />
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} /> 
                    </div>
                    {/*  */}
                    <div className="project-image-box" onClick={openPopupboxDigipet}>
                        <img className="project-image" src={digipet} alt="Digipet Project"/> 
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigZootyWater} />
            <PopupboxContainer {...popupboxConfigHousing4u} />
            <PopupboxContainer {...popupboxConfigWayfarer} />
            <PopupboxContainer {...popupboxConfigDigipet} />
        </div>
    
    )
}

export default Projects;
