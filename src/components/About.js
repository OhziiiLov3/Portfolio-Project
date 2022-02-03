import React from "react"
import aboutImage from "..//IMG_2181.jpg";

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
                    <p> My name is Keith “Ohz” Baskerville and I am an Entrepreneur, Full Stack, and DevOps Engineer. I want to start first by saying thank you for taking the time to visit my portfolio and getting to know about some of the work I do! I am a great problem solver with a positive outlook and have a passion for finding solutions! Before I transitioned to tech, My background spans from banking to project management, and I have worked with teams to support underserved and underrepresented communities. The experience I have gained from providing services and skills to marginalized communities has given me empathy and has helped me become a leader and flexible teammate. My willingness to continuously learn and share knowledge has empowered me to pick up the technical skills to become a Full-Stack and DevOps Engineer!</p>
            </div>
            </div> 
        </div>
    )
}

export default About
