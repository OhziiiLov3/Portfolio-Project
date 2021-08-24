import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon

} from "react-share";
import { Link } from "react-scroll";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                       <p>Oakland,Ca</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-555">(510)925-7219</a>
                        </div>
                        <div className="d-flex">
                            <p>Email: klbaskerville0520@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg- col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} href="#" className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110} href="#" className="footer-nav">About Me</Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-110} href="#" className="footer-nav">Services</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} href="#" className="footer-nav">Experience</Link>
                                <br/>
                                <Link smooth={true} to="projects" offset={-110} href="#"className="footer-nav">Projects</Link>
                                <br/>
                                <Link smooth={true} to="contacts" offset={-110} href="#" className="footer-nav">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-itmes-center">
                        <div className="d-flex justify-content-center">
                        <FacebookShareButton
                                url={"https://zootyworld.com/zooty-water"}
                                quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                                hashtag="#BlackEntrepreneur"
                                >
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>
                        <TwitterShareButton
                                url={"https://zootyworld.com/zooty-water"}
                                quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                                hashtag="#BlackEntrepreneur"
                                >
                            <TwitterIcon className="mx-3" size={36}/>
                        </TwitterShareButton>
                        <RedditShareButton
                                url={"https://zootyworld.com/zooty-water"}
                                quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                                hashtag="#BlackEntrepreneur"
                                >
                            <RedditIcon className="mx-3" size={36}/>
                        </RedditShareButton>
                        <LinkedinShareButton
                                url={"https://zootyworld.com/zooty-water"}
                                quote={"Zooty Water, Solarized Strcutred Alkaline Water!"}
                                hashtag="#BlackEntrepreneur"
                                >
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Zooty Worrld LLC | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;