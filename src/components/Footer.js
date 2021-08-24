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
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a  className="footer-nav">Experiences</a>
                                <br/>
                                <a  className="footer-nav">Projects</a>
                                <br/>
                                <a  className="footer-nav">Contact</a>
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