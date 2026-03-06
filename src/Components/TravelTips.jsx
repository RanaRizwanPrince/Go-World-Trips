import React from 'react'
import { NavLink } from 'react-router-dom'
import PopularDestinations from './PopularDestinations'
const TravelTips = () => {
    return (
        <>
            <section className="TravelTips">
                <PopularDestinations />
                <div className="content">
                    <h5>Action Oriented</h5>
                    <h2>Quick Travel Tips And Guides</h2>
                    <p>Travel Europe with Ease From cultural tips to packing hacks, we provide the essentials for a seamless Schengen experience.</p>
                    <NavLink className="link" to="https://wa.me/447311132376" target="_blank" rel="noopener noreferrer">Enquire Now</NavLink>
                </div>
            </section>
        </>
    )
}
export default TravelTips