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
                        <input 
                        id="name"
                        className="form-control" 
                        type="text"
                        placeholder="Name" 
                        name="name"
                        />
                        {/* PHONE INPUT */}
                        <input 
                            id="phone"
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                            phone="phone"
                        />
                        {/* Email INPUT */}
                        <input 
                            id="email"
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            email= "email"
                        />
                        {/* Subject INPUT */}
                        <input 
                            id="subject"
                            className="form-control"
                            type="text"
                            placeholder="Subject"
                            subject="subject"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description INPUT */}
                        <textarea 
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Please leave a brief description"
                            description="description"
                            ></textarea>
                        <button className="btn btn-primary contact-btn">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts; 
