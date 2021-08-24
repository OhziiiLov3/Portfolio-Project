import React from "react";
import logo from "../Logo.png";
import {Link} from "react-scroll";
// Font awesome import 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
           <div className="container">
            <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..." /> Ohz's Portfolio </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "rgba(0, 47, 255, 0.884)" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" aria-current="page">
                            <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item" aria-current="page">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item" aria-current="page">
                            <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item" aria-current="page">
                            <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item" aria-current="page">
                            <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">Projects</Link>
                        </li>

                        <li className="nav-item" aria-current="page">
                            <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contact</Link>
                        </li>
                </ul>
               
    </div>
    </div> 
</nav>
    )
}

export default Navbar;
