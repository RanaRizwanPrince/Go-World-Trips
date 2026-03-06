import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <section className="footer">
                <img src="https://ik.imagekit.io/uvsjit70p/shape1?updatedAt=1770105778395" className="w-100" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 my-2">
                            <img src="https://ik.imagekit.io/uvsjit70p/clogo?updatedAt=1771330760361" className=" img-fluid" data-aos="fade-up" />
                            <p data-aos="fade-up">Go World Trips is your trusted partner for unforgettable journeys and experiences. We provide expert guidance, seamless bookings, and personalised travel experiences worldwide.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <h1 data-aos="fade-up">Essential Links</h1>
                            <NavLink className="Linki" to="/About" data-aos="fade-up">About Us</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Delivery Information</NavLink><br /> 
                            <NavLink className="Linki" to="" data-aos="fade-up">Terms & Conditions</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Customer Service</NavLink><br /> 
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <h1 data-aos="fade-up">Our Assistance</h1>
                            <NavLink className="Linki" to="" data-aos="fade-up">Best Tour Guide</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Tour Booking</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Hotel Booking</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Ticket Booking</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Rental Services</NavLink><br />
                        </div>
                        <div className="col-lg-3 col-md-6 my-2">
                            <h1 data-aos="fade-up">Get In Touch</h1>
                            <p data-aos="fade-up"><b>Location:</b> 167-169 Great Portland Street , 5th Floor, London, United Kingdom, W1W 5PF</p>
                            <p data-aos="fade-up"><b>Email:</b> info@goworldtrips.co.uk</p>
                            <p data-aos="fade-up"><b>Website:</b> goworldtrips.co.uk</p>
                            <p data-aos="fade-up"><b>Phone:</b> +44 7311 132376</p>
                            <div className="iconbox" data-aos="fade-up">
                                <NavLink target='_blank' to="https://www.facebook.com/GoWorldTrips"><FaFacebook className='icon' /></NavLink>
                                <NavLink target='_blank' to="https://www.instagram.com/goworldtripsuk/"><BiLogoInstagramAlt className='icon' /></NavLink>
                                <NavLink target='_blank' to="https://www.youtube.com/@WorldTrips-r1e"><FaYoutube className='icon' /></NavLink>
                                <NavLink target='_blank' to="https://www.tiktok.com/@go.world.trips"><FaTiktok className='icon' /></NavLink>
                                <NavLink target='_blank' to="https://wa.link/sh63xq"><FaWhatsapp className='icon' /></NavLink>
                            </div>
                        </div>
                    </div><hr data-aos="fade-up" />
                    <p className='text-center' data-aos="fade-up"> All rights reserved, 2026 Travelin. Go World Trips</p>
                </div>
            </section>
        </>
    )
}
export default Footer