import React from 'react'
import { MdGppGood } from "react-icons/md";
import { LuTickets } from "react-icons/lu";
import { RiGuideFill } from "react-icons/ri";
import { SiCustomink } from "react-icons/si";
import { AiFillCustomerService } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
const About = () => {
    return (
        <>
            <section className="About1">
                <div className="container">
                    <div className="content">
                        <h1>About Go World Trips Your UK Travel Experts</h1>
                        <p>At Go World Trips, based in the UK, we specialize in Schengen visa services tailored for British travellers. We assist you in securing visas for over 27 European destinations with ease. Our deep local expertise ensures every application is precise, minimizing delays or rejections. What sets us apart is our transparent handling of original documents we guide you step-by-step, ensuring every detail is authentic. Offering a full range of services visa assistance, flight bookings, hotels, and personalized itineraries we ensure a smooth, 10-day processing time, so you can relax and enjoy your next adventure.</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="About2">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <h6>Entity Summary</h6>
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
                        <div className="col-lg-6 col-md-6 my-2 text-center">
                            <img src="https://html.tonatheme.com/2025/tourvisor/assets/images/resource/about-1.jpg" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-6 box">
                            <p data-aos="fade-up"><MdGppGood /> Turn your travel dreams into reality with expert guidance.</p>
                            <p data-aos="fade-up"><MdGppGood /> Unconditional support for Schengen visa applications.</p>
                            <p data-aos="fade-up"><MdGppGood /> Accomplished consultancy for UK citizenship process.</p>
                            <p data-aos="fade-up"><MdGppGood /> Customized Europe tour packages designed to match your budget and preferences.</p>
                            <p data-aos="fade-up"><MdGppGood /> Step-by-step assistance from documentation to departure.</p>
                            <p data-aos="fade-up"><MdGppGood /> Accurate travel itineraries aligned with embassy requirements.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 box">
                            <p data-aos="fade-up"><MdGppGood /> Hotel reservations and travel insurance arrangements.</p>
                            <p data-aos="fade-up"><MdGppGood /> Embassy appointment booking and application review support.</p>
                            <p data-aos="fade-up"><MdGppGood /> Transparent process with no hidden charges.</p>
                            <p data-aos="fade-up"><MdGppGood /> Friendly and responsive customer support team.</p>
                            <p data-aos="fade-up"><MdGppGood /> Reduced stress and higher confidence in visa approval.</p>
                            <p data-aos="fade-up"><MdGppGood /> Personalized consultation based on your travel goals.</p>
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
                                <p>Experience seamless travel with our easy and quick booking system. In just a few clicks, secure your dream trips across Europe and beyond, hassle-free.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><RiGuideFill className='icon' /></h1>
                                <h4>Best Guide</h4>
                                <p>Our expert team acts as your best guide, offering insider tips and tailored advice, ensuring you explore every destination with confidence.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><SiCustomink className='icon' /></h1>
                                <h4>Extended Customization</h4>
                                <p>We provide extended customizations for every journey, tailoring itineraries to your personal interests, preferences, and pace. Your adventure, your way.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <div className="box">
                                <h1><AiFillCustomerService className='icon' /></h1>
                                <h4>Customer Care 24/7</h4>
                                <p>Rely on our dedicated customer care, available 24/7. From inquiries to support, we ensure your peace of mind at every step of your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about4">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 my-2">
                            <h5>Why Trust Us for Your Travel & Visa Needs</h5>
                            <h1>Discover Our Travel Excellence</h1>
                            <p className='lead'>At Go World Trips, we deliver trusted travel solutions for UK travellers, combining expert visa guidance, personalised planning, and seamless booking experiences. Our mission is to make every journey simple, secure, and unforgettable.</p>
                            <div className="row">
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Professional Travel Consultants</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Flexible Travel Planning</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Transparent & Trusted Process</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> UK-Focused Travel Expertise</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Reliable Customer Support</p>
                                </div>
                                <div className="col-6">
                                    <p className='lead'><GrStatusGood /> Award-Level Service Standards</p>
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
            <section className="team3">
                <div className="container">
                    <h1>Let’s Capture Beauty of the World</h1>
                    <p className="lead">Discover breathtaking destinations, unforgettable journeys, and magical moments that turn every trip into a lifetime memory.</p>
                    <NavLink to="/contact" className="btn hover">Booking Today</NavLink>
                </div>
            </section>
        </>
    )
}
export default About