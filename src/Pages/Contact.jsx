import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
const Contact = () => {
    return (
        <>
            <section className="About1">
                <div className="container">
                    <div className="content">
                        <h1>Welcome to Go World Trips  Your Gateway to Unforgettable Journeys</h1>
                        <p>Discover a world of travel possibilities with Go World Trips. From hidden European gems to iconic global destinations, we bring expert tips, insider guides, and inspiring stories to help you plan your next unforgettable adventure. Let’s explore, experience, and create memories that last a lifetime.</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="contact1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-3 d-flex align-items-stretch">
                            <div className="box w-100">
                                <h1><FaLocationDot /></h1>
                                <h1>Address Line</h1>
                                <p>167-169 Great Portland Street , 5th Floor, London, United Kingdom, W1W 5PF</p>
                            </div>
                        </div>
                        <div className="col-lg-4 my-3 d-flex align-items-stretch">
                            <div className="box w-100">
                                <h1><FaPhone /></h1>
                                <h1>Phone Number</h1>
                                <a className="link" href="tel:+44 7311 132376">+44 7311 132376</a>
                            </div>
                        </div>
                        <div className="col-lg-4 my-3 d-flex align-items-stretch">
                            <div className="box w-100">
                                <h1><IoMailOpen /></h1>
                                <h1>Mail Adress</h1>
                                <p>info@goworldtrips.co.uk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ width: "100%", height: "450px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.538257277908!2d-0.1462543231203449!3d51.521686709659164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad65ef3a8a7%3A0x328b74f0f66523e3!2s5th%20Floor%2C%20167%20%E2%80%93%20169%20Great%20Portland%20St%2C%20London%20W1W%205PF%2C%20UK!5e0!3m2!1sen!2s!4v1771505298508!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map" ></iframe>
            </div>
        </>
    )
}
export default Contact