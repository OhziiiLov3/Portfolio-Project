import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faDatabase, faTools} from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-scroll"


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-4"><h1>Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon ={faDesktop} size="2x"/> </div>
                                <Link smooth={true} to="projects" offset={-110} href="#" className="service-link"><h3> Languages & Libraries</h3></Link>
                                <p>  Languages: Bash | Java | Javascript | Python3 | HTML | CSS </p>
                                <p>  Libraries/Frameworks: Django | Reactjs | Express.js | Mongoose | jQuery</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon={faDatabase} size="2x" /> </div>
                                <Link smooth={true} to="projects" offset={-110} href="#" className="service-link"><h3> Databases & Services</h3></Link>
                                <p> Technologies: Amazon RDB | Amazon DynamoDB | MySQL | MongoDB | PostgreSQL</p>
                                <p> Technologies: AWS | Google Cloud | Jenkins | Docker | Kubernetes | Terraform </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon={faTools} size="2x" /> </div>
                                <Link smooth={true} to="projects" offset={-110} href="#" className="service-link"><h3>Certifications & Tools</h3></Link>
                                <p>Certifications: Software Engineering Immersive | PCEP - Certified Entry-Level Python Programmer</p>
                                <p>Tools: Version Control(Git, GitHub, GitLab)| Ansible | GSuite | Kanban Board</p>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default Services;
