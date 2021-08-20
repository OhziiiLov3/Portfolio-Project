import React from 'react'
import digipet from "../images/Digipet.png"
import housing4u from "../images/Housing4u.png"
import wayfarer from "../images/Wayfarer.png"
import zootyWater from "../images/Zootywaterapp.png"
// FONTAWESOME IMPORTS 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="project-image-box">
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
        </div>
    
    )
}

export default Projects;