import React from 'react'
import { NavLink } from 'react-router-dom'
const TravelTips = () => {
    return (
        <>
            <section className="TravelTips">
                        <img src="https://ik.imagekit.io/uvsjit70p/TravelTips?updatedAt=1772741059932" className="w-100 my-2 img-thumbnail" />
                    <div className="content my-2">
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