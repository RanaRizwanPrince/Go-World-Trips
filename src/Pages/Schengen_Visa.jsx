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
                        <h1>Apply Your Dream Destiny</h1>
                        <p>Dreaming about sipping coffee in Paris? Walking through ancient streets in Rome? Watching the Northern Lights in Norway? Europe isn’t just a destination, it’s an experience waiting to happen. And your first step? Getting your Schengen visa. We don’t just process paperwork. We clear the path so you can focus on packing your bags and planning your outfits for Instagram-worthy moments. Let’s break it all down simply, clearly, and stress-free and enjoy your trips with Go World Trips.</p>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="Schengen_Visa2">
                <div className="container">
                    <div className="content">
                        <h1>Global Visa Services You Can Trust</h1>
                        <p>We provide expert visa services for a comprehensive range of international destinations. Our professional team ensures precise documentation, clear guidance, and seamless application processing. Whether you are travelling for tourism, business, study, or family travel, we provide reliable support, timely updates, and personalized assistance, helping you navigate requirements with confidence and ensuring a smooth, efficient, and successful visa application experience.</p>
                    </div>
                    <div className="row">
                        {SchengenVData.map((data) => (
                            <div className="col-lg-3 col-md-6 my-2 my-2 d-flex align-items-stretch" key={data.id} data-aos="fade-up">
                                <div className="card">
                                    <img src={data.img} className='img-fluid img-thumbnail' />
                                    <div className="card-body">
                                        <h4>{data.h3}</h4>
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