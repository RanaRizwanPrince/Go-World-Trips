import React from 'react'
import { BlogData } from '../Data/BenefitsData'
import { NavLink } from 'react-router-dom'
import { HiExternalLink } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const Blogs = () => {
    return (
        <>
            <section className="Blog1">
                <div className="container">
                    <div className="content">
                        <h1>Travel Stories, Tips And Inspiration</h1>
                        <p>Welcome to the Go World Trips blog, your trusted space for travel inspiration, expert tips, visa guidance, and destination insights. Designed for UK travellers, our content helps you plan smarter, travel better, and explore the world with confidence.</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="blog2">
                <div className="container">
                    <div className="content">
                        <h1>Latest Travel Stories and Guides with Go World Trips</h1>
                        <p>Discover expert travel tips, visa guidance, destination insights, and inspiring stories with Go World Trips. Our blog is designed for UK travellers seeking smart planning, stress-free journeys, and trusted advice to explore the world confidently, safely, and with unforgettable experiences at every step of their travel journey.</p>
                    </div>
                    <div className="row">
                        {BlogData.map((Bdata) => (
                            <div className="col-6 col-md-3 col-lg-3 my-2 d-flex align-items-stretch" key={Bdata.id} data-aos="fade-up">
                                <div class="card"  >
                                    <img src={Bdata.img} className='img-fluid img-thumbnail' />
                                    <div class="card-body">
                                        <div className="date d-flex justify-content-between">
                                            <p><FaUser /> {Bdata.Admin}</p>
                                            <p><FaCalendarAlt /> {Bdata.Date}</p>
                                        </div>
                                        <h5>{Bdata.h3}</h5>
                                        <p>{Bdata.p}</p>
                                        <NavLink to="*" className="btn hover">Read More <HiExternalLink /></NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}
export default Blogs