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

// ZOOTY WATER APP
// const openPopupboxZootywater = () => {
//     const content = (
//     <>
//     <img src={zootyWater} alt="zooty water pop up box"/>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam, aliquid ad tenetur reiciendis suscipit, explicabo soluta illo expedita</p>
//         <b>Zooty Water:</b> <a className="hyper-link" onClick= {() => window.open("https://zootywaterapp.herokuapp.com/")}>https://zootywaterapp.herokuapp.com/</a>
//     </>

//     )
//     PopupboxManager.open({ content });
//     PopupboxManager.update({
//         content,
//         config: {
//             titleBar: {
//                 text: "Your Edited Text Here",
//             },
//         },
//     });
// }

//     const popupboxConfigZootyWater = {

//     }

    // Netflix
    const openPopupboxZootywater = () => {
        const content = (
            <>
                <img className="project-image-popupbox" src={zootyWater} alt="ZootyWater Project..." />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
                <b>Zooty Water:</b> <a className="hyper-link" onClick={() => window.open("https://zootywaterapp.herokuapp.com")}>https://zootywaterapp.herokuapp.com</a>
            </>
        )
        PopupboxManager.open({ content })
        PopupboxManager.update({
        content,
        config: {
            titleBar: {
                text: "Your Edited Text Here",
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

    return (
        <div className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxZootywater}>
                        <img className="project-image" src={zootyWater} alt="Zootywater App Project" />
                        <div className="overflow"> </div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={housing4u} alt="Housing4u Project" />
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={wayfarer} alt="Wayfarer Project" />
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} /> 
                    </div>
                    {/*  */}
                    <div className="project-image-box">
                        <img className="project-image" src={digipet} alt="Digipet Project"/> 
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigZootyWater} />
        </div>
    
    )
}

export default Projects;
