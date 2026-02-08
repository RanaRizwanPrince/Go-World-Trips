import React from 'react'
import { MdGppGood } from "react-icons/md";
import { LuTickets } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { SiCustomink } from "react-icons/si";
import { AiFillCustomerService } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import Team from '../Components/Team';
const About = () => {
    return (
        <>
            <section className="About1">
                <div className="container">
                    <div className="content">
                        <h1>This is a About Page</h1>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="About2">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <h6>About Company</h6>
                            <h1>We are the leading travel and adventure company.</h1>
                            <p>At <b>Go World Trips</b>, we make your European travel dreams a reality. Specializing in Schengen visa services, we help travelers secure visas for over 27 destinations across Europe with ease and confidence. Our expert team understands every embassy requirement, ensuring each application is meticulously prepared to minimize delays or rejections. What truly sets us apart is our dedication to authentic documentation we guide clients on the exact papers needed, safeguard their submission, and maintain integrity throughout the process.</p>
                            <div className="mainbox">
                                <div className="box">
                                    <h2><MdGppGood /></h2>
                                    <h5>Total Location</h5>
                                </div>
                                <div className="box">
                                    <h2><MdGppGood /></h2>
                                    <h5>Total Activity</h5>
                                </div>
                                <div className="box">
                                    <h2><MdGppGood /></h2>
                                    <h5>Tour Packages</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2">
                            <img src="https://html.tonatheme.com/2025/tourvisor/assets/images/resource/about-1.jpg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><LuTickets className='icon' /></h1>
                                <h4>Easy And Quick Booking</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad soluta harum architecto ducimus pariatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><RiGuideFill className='icon' /></h1>
                                <h4>Best Guide</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad soluta harum architecto ducimus pariatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><SiCustomink className='icon' /></h1>
                                <h4>Extended Customization</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad soluta harum architecto ducimus pariatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><AiFillCustomerService className='icon' /></h1>
                                <h4>Customer Care 24/7</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad soluta harum architecto ducimus pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about4">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <h5>Why Choose Us</h5>
                            <h1>Discover Our Travel Guideline</h1>
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <div className="row">
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Professional Tour Guide</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Quality you can trust</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Exceptional flexibility</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Award-winning support</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Blandit sit amet non magna</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-6 my-2">
                            <img src="https://html.tonatheme.com/2025/tourvisor/assets/images/background/chooseus-bg.jpg" className="img-fluid img-thumbnail" />
                        </div>
                    </div>
                </div>
            </section>
            <Team />
        </>
    )
}
export default About