import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faHeadphones, faTint} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-4"><h1>My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon ={faDesktop} size="2x"/> </div>
                                <Link smooth={true} to="projects" offset={-110} href="#" className="service-link"><h3> Web Development</h3></Link>
                                <p> Most Used Front-End Skills: ReactJS | Javascript | CSS | Python</p>
                                <p> Most Used Back-End Skills: PostgreSQL | Django | MongoDB | ExpressJS </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon={faHeadphones} size="2x" /> </div>
                                <Link smooth={true} to="contacts" offset={-110} href="#" className="service-link"><h3> Audio Engineering</h3></Link>
                                <p> Technologies Used: Logic Pro X and Native Instruments Maschine</p>
                                <p>
                                Services Offered:  Audio Tracking | Arranging | Mixing | Mastering | Production
                                </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon={faTint} size="2x" /> </div>
                                <a className="service-link" href="https://zootyworld.com/shop"> <h3>Zooty Water</h3> </a>
                                <p>
                                    Zooty Water is supercharged and Activated using the Sun’s power!
                                </p>
                                <p>Active ingredients: Pure Energy, Health, and Wealth!</p> 
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
