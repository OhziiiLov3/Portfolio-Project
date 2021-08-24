import React from 'react'

export const Contacts = () => {
    return (
        <div className="contacts"> 
            <div className="text-center">

             <h1> Contact Me</h1>
             <p> Please fill out the form if you would like to connect!</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">

                        <input 
                        className="form-control" 
                        type="text"
                        placeholder="Name" 
                        name="name"
                        />
                        <div className="line"></div>
                        </div>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                            phone="phone"
                            />
                        <div className="line"></div>
                        </div>
                        {/* Email INPUT */}
                        <div className="text-center">
                        <input 
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            email= "email"
                        />
                        <div className="line"></div>
                        </div>
                        {/* Subject INPUT */}
                        <div className="text-center">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Subject"
                            subject="subject"
                        />
                        <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description INPUT */}
                        <div className="text-center">
                            <textarea 
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Please leave a brief description"
                            description="description"
                            ></textarea>
                            <div className="line"></div>
                        </div>
                        <button className="btn btn-primary contact-btn">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts; 
