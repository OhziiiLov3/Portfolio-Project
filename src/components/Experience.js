import React from 'react';


const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experince</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>General Assembly</h2>
                        <h3> 2020-2021</h3>
                        <p>Three-month, 500-hour full-time and full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies including: HTML, CSS, SASS, Javascript, jQuery, PostgreSQL, MongoDB, Ruby, Ruby on Rails, AngularJS, NodeJS, ReactJS, Wordpress, Git, Github, and Agile/Scrum.</p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Glide Memorial</h2>
                        <h3>2018-2020</h3>
                        <p> Designed and implemented a Financial Wellness program to counsel underserved communities and assist them in stabilizing their finances. Coordinated individualized financial assessments and provided solutions, such as credit building, budgeting, money management, tax support and housing outreach Case management support to empower informed decisions in identifying available community resources </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Compass Family Services</h2>
                        <h3>2017-2018</h3>
                        <p> Coordinated and facilitated weekly housing workshops for at-risk/homeless families with the goal of securing permanent housing. Creatively identified and connected landlords to program participants.Worked closely with Data Impact team to design an internal database to assist case managers connecting families to landlords </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>San Francisco Federal Credit Union</h2>
                        <h3>2015-2016</h3>
                        <p>Communicated company updates and protocol via internal emailing system.
                            Created and edited organizational content for all social media outlets.
                            Designed and collaborated Marketing campaigns for emerging product </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
