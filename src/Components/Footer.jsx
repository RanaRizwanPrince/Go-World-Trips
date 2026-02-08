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
                        <div className="col-lg-3">
                            <img src="https://ik.imagekit.io/uvsjit70p/lpng?updatedAt=1769515179360" className=" img-thumbnail" data-aos="fade-up" />
                            <p data-aos="fade-up">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error incidunt ipsum voluptatum. Voluptatem, consequuntur commodi, reiciendis eius non voluptates quis minima doloremque consequuntur commodi, reiciendis.</p>
                        </div>
                        <div className="col-lg-2">
                            <h1 data-aos="fade-up">Quick link</h1>
                            <NavLink className="Linki" to="" data-aos="fade-up">About Us</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Delivery Information</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Privacy Policy</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Terms & Conditions</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Customer Service</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Return Policy</NavLink><br />
                        </div>
                        <div className="col-lg-3">
                            <h1 data-aos="fade-up">Our Services</h1>
                            <NavLink className="Linki" to="" data-aos="fade-up">Best Tour Guide</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Tour Booking</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Hotel Booking</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Ticket Booking</NavLink><br />
                            <NavLink className="Linki" to="" data-aos="fade-up">Rental Services</NavLink><br />
                        </div>
                        <div className="col-lg-4">
                            <h1 data-aos="fade-up">Contact Information</h1>
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
                    <p className='text-center text-white' data-aos="fade-up"> All rights reserved, 2026 Travelin. Go World Trips</p>
                </div>
            </section>
        </>
    )
}
export default Footer