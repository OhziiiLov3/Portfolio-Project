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
                    <p> My name is Keith “Ohz” Baskerville and I am an Entrepreneur, Software, and Audio Engineer. I want to start first by saying thank you for taking the time to visit my portfolio and getting to know about some of the work I do! My passion stems from providing services and support to marginalized communities as my experiences span from non-profit banking to financial wellness and project managing. One of the core values I learned along my journey is understanding what it means “to meet people where they are at”. As a natural leader and facilitator, I take pride in creating community-driven programs that empower the underserved. Some of the programs I have designed range from housing outreach for at-risk/homeless single-adults and families to Audio Engineering lessons for youth development.</p>
                    <p> 
                        However, I transitioned to become a full-stack developer and have gained the skill set to build with the latest front- and back-end. The programming languages, tools, and methodologies include HTML, CSS, Javascript, ReactJS,  jQuery, Python, PostgreSQL, MongoDB, Django, ExpressJS, Typescript, NodeJS, BootStrap, Git, and Github. I built this particular project using ReactJs and Bootstrap. If you are interested in seeing more code, I left a link to my Github in my projects below! In addition to coding, I own a solarized water company called Zooty Water. Zooty Water is solarized structured Alkaline water with a 9+PH level perfect for sustaining, recovering, and activating your body's energy. Zooty Water is thinner than most water, and some say it is even sweeter!  Learn more at <a href="https://zootyworld.com/zooty-water"> Zooty Water</a></p>
            </div>
            </div> 
        </div>
    )
}

export default About
