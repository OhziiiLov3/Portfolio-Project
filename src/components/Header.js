import React from "react";
// import Typed from "react-typed";
import { Link } from "react-scroll";




const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info" >
                <h1> Software Development Portfolio</h1>
                {/* <Typed
                    className="typed-text"
                    strings={[" Entrepreneur", "Full Stack Engineer ", " DevOps Engineer" , " and Alkaline Water Enthusiast " ]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                    /> */}
                    <Link smooth={true} to="contacts" offset={-110} className="btn btn-primary" href="#">Contact Me</Link>
            </div>
        </div>

    )
}

export default Header;
