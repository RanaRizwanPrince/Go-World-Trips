import React from 'react';
import { NavLink } from 'react-router-dom';
import { SchengenVData } from "../Data/BenefitsData";
import FlashOffer from '../Components/FlashOffer';
const Schengen_Visa = () => {
    return (
        <>
            <section className="Schengen_Visa1">
                <div className="container">
                    <div className="content">
                        <h1>Apply Your Schengen Visa</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nesciunt saepe, consequuntur harum quos distinctio explicabo tenetur suscipit eaque. Illum aut repellendus animi praesentium expedita aperiam excepturi iure dicta, nemo maiores reprehenderit omnis, ipsa totam mollitia consequuntur! Similique dolore ab sint sed dolor architecto aliquam tempora atque! Labore, repellendus vitae?</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="Schengen_Visa2">
                <div className="container">
                    <div className="content">
                        <h1>All Countries Where We Offer Trusted Visa Services</h1>
                        <p>This section highlights all countries for which we provide professional visa services Our team guides you through requirements documentation and application processes ensuring accuracy transparency and success Whether tourism business study or family travel we help applicants confidently apply with expert support timely updates and reliable assistance for smooth international travel planning across global destinations worldwide with care and commitment</p>
                    </div>
                    <div className="row">
                        {SchengenVData.map((data) => (
                            <div className="col-lg-3 col-md-6 my-2 my-2 d-flex align-items-stretch" key={data.id} data-aos="fade-up">
                                <div className="card">
                                    <img src={data.img} className='img-fluid img-thumbnail' />
                                    <div className="card-body">
                                        <h5>{data.h3}</h5>
                                        <p>{data.p}</p>
                                        <NavLink to={data.link} className="btn hover">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col my-2 box">
                            <h1>Comming Soon</h1>
                        </div>
                    </div>
                </div>
            </section>
            <FlashOffer />
        </>
    )
}
export default Schengen_Visa