import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1> Web Development Portfolio and Services</h1>
                <Typed
                    className="typed-text"
                    strings={[" Entreprneur ", "Full Stack Software Engineer ", " Audio Engineer " , " and Alkaline Water Enthusiast " ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main"> Contact me</a>
            </div>
        </div>
    )
}

export default Header
