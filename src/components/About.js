import React from "react"
import aboutImage from "../IMG_0966_3.jpg";

const About = () => {
    return (
        <div id="about" className="container py-5" >
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className="aboutimage" src={aboutImage} alt="aboutimage" />

                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading"> About Me</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam soluta labore ea minus doloribus magni deleniti consequatur molestiae at? Magni minus, est culpa quibusdam ipsa quis! Quo, doloremque sed?</p>
            </div>
            </div> 
        </div>
    )
}

export default About
