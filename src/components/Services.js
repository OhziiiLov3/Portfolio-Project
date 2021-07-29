import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faHeadphones, faTint} from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div className="services">
            <h1 className="py-4"><h1>My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon ={faDesktop} size="2x"/> </div>
                                <h3> Web Development</h3>
                                <p> Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon={faHeadphones} size="2x" /> </div>
                                <h3> Audio Engineering</h3>
                                <p> Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-4 col-sm-7">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="service-icon" icon={faTint} size="2x" /> </div>
                                <h3>Zooty Water</h3>
                                <p> Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
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
