import React from 'react'
import { NavLink } from 'react-router-dom'
import PopularDestinations from './PopularDestinations'
const TravelTips = () => {
    return (
        <>
            <section className="TravelTips">
                <PopularDestinations />
                <div className="content">
                    <h3>Proactive</h3>
                    <h2>Fast and Useful Travel Tips</h2>
                    <p>Plan a hassle-free Europe trip with practical cultural advice and smart packing strategies for a seamless Schengen experience.</p>
                    <NavLink className="link" to="https://wa.me/447311132376" target="_blank" rel="noopener noreferrer">Enquire Now</NavLink>
                </div>
            </section>
        </>
    )
}
export default TravelTips