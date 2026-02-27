import React from "react";
import { NavLink } from 'react-router-dom';
import { teamData } from "../Data/BenefitsData";
const Team = () => {
    return (
        <>
            <section className="About1">
                <div className="container">
                    <div className="content">
                        <h1>Meet the People Behind Your Perfect Journeys</h1>
                        <p>Welcome to the Go World Trips team page, where passion meets professionalism. Our dedicated travel experts work together to deliver trusted guidance, personalised planning, and seamless travel experiences for our UK travellers worldwide.</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="team2">
                <div className="container">
                    <h6>Our Professionals</h6>
                    <h1>Our Travel Experts Team</h1>
                    <p className="lead">Meet the dedicated professionals behind GoWorld Trips. Our experienced travel consultants, visa specialists, and customer support team work together to deliver trusted guidance, seamless planning, and exceptional service for every journey.</p>
                    <div className="row">
                        {teamData.map((member, index) => (
                            <div className="col-lg-4 col-md-6 my-3">
                                <div className="card" key={index}>
                                    <img src={member.img} alt={member.name} className="img-fluid" />
                                    <div className="content">
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="team3">
                <div className="container">
                    <h1>Let’s Capture Beauty of the World</h1>
                    <p className="lead">Discover breathtaking destinations, unforgettable journeys, and magical moments that turn every trip into a lifetime memory.</p>
                    <NavLink to="" className="btn hover">Booking Today</NavLink>
                </div>
            </section>
        </>
    );
};
export default Team;