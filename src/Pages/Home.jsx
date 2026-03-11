import React from 'react'
import { NavLink } from 'react-router-dom';
import BenefitsData from "../Data/BenefitsData";
import { PopularD } from "../Data/BenefitsData";
import { TourPackages } from "../Data/BenefitsData";
import { BlogData } from "../Data/BenefitsData";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import ContactForm from '../Components/ContactForm';
const Home = () => {
    return (
        <>
            <section className="home1">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <img src="https://ik.imagekit.io/uvsjit70p/Plan?updatedAt=1771000611132" className="img-fluid animate__animated animate__backInDown animate__delay-5s" />
                            <h5>Get Unforgettable Pleasure With Us</h5>
                            <h3>Welcome to Go World Trips  Your Gateway to Europe and Beyond</h3>
                            <p>Dreaming about walking through the romantic streets of Paris? Exploring the beauty of Switzerland? Or planning your future with UK citizenship?</p>
                        </div>
                        <div className="col-lg-6 animate__animated animate__backInUp animate__delay-4s">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home2">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7 col-md-6 my-2">
                            <h1 data-aos="fade-up">Plan Your Travel With Go World Trips</h1>
                            <p data-aos="fade-up">Planning an international journey can feel overwhelming visa requirements, documentation, hotel bookings, travel insurance, appointments it’s a lot, right?</p>
                            <p data-aos="fade-up">That’s where Go World Trips steps in.</p>
                            <p data-aos="fade-up">We make travel simple, smooth, and stress-free. Whether you’re dreaming of exploring Europe with a Schengen visa, planning a romantic honeymoon, arranging a family vacation, or seeking guidance for UK citizenship, we handle the details so you can focus on the excitement.</p>
                            <p data-aos="fade-up">Because your journey deserves more than just booking tickets it deserves expert care.</p>
                            <NavLink data-aos="fade-up" className='btn hover' to="/About">Read More</NavLink>
                        </div>
                        <div className="col-lg-5 col-md-6 my-2" data-aos="fade-up">
                            <img src="https://ik.imagekit.io/uvsjit70p/about?updatedAt=1770288191261" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home3">
                <div className="container">
                    <div className="content">
                        <h1 data-aos="fade-up">Have Strong Schengen Visa Approval Ratios</h1>
                        <p data-aos="fade-up">At Go World Trips, we proudly maintain a strong success record for Switzerland (CH), Hungary (HU), Lithuania (LT), and Latvia (LV) Schengen visas. These countries currently show positive visa approval trends for genuine travelers with complete documentation. Our expert team carefully prepares each application, ensuring accurate paperwork, strong financial proof, and clear travel plans to maximize your chances of approval and smooth processing.</p>
                        <div className="row">
                            {TourPackages.map((valu) => (
                                <div className="col-lg-3 col-md-6 my-2 my-2 d-flex align-items-stretch" key={valu.id} data-aos="fade-up">
                                    <div className="card">
                                        <img src={valu.img} className='img-fluid' />
                                        <div className="card-body">
                                            <h4>{valu.h3}</h4>
                                            <p>{valu.p}</p>
                                            <NavLink to={valu.link} className="btn hover">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="home9">
                <div className="container">
                    <div className="box row d-flex align-items-center">
                        {/* <div className="col"> */}
                        <h5 data-aos="fade-up" data-aos-duration="4000">Journey Beyond the Ordinary</h5>
                        <h1 data-aos="fade-up">Discover Popular Destinations</h1>
                        <p data-aos="fade-up">Discover captivating destinations with our expertly curated tours. From vibrant cities to serene landscapes, enjoy seamless planning, comfort, authentic experiences, and unforgettable adventures that create lasting memories for every traveller.</p>
                        {/* </div> */}
                        {/* <div className="col-lg-2 col-md-2">
                            <NavLink to="/*" className='btn hover' data-aos="fade-up">Read More</NavLink>
                        </div> */}
                    </div>
                    <div className="row">
                        {PopularD.map((item) => (
                            <div className="col-lg-3 col-md-3 my-3" key={item.id} data-aos="fade-up">
                                <div className="card destination-card">
                                    <img src={item.img} className="img-fluid img-thumbnail" />
                                    <div className="content">
                                        <h3>{item.h3}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="home4">
                <div className="container">
                    <h5 data-aos="fade-up">Discover Our Exceptional Services</h5>
                    <h1 data-aos="fade-up">Reliable Schengen Visa Assistance And Travel Solutions</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/coaching/coaching-1-1.jpg" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h4>Customised Tour Planning</h4>
                                            <p>We design personalised itineraries tailored to your preferences, ensuring seamless travel, unforgettable experiences, and expert guidance for every destination, making your journey truly unique and memorable.</p>
                                            {/* <NavLink to="/*" className="btn hover">Read More</NavLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/coaching/coaching-1-2.jpg" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h4>Flight and Hotel Bookings</h4>
                                            <p>Enjoy hassle-free flight and hotel reservations with best deals, premium options, and convenient arrangements, guaranteeing comfort, affordability, and a smooth start to every adventure you embark on.</p>
                                            {/* <NavLink to="/*" className="btn hover">Read More</NavLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/coaching/coaching-1-3.jpg" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h4>Visa Assistance</h4>
                                            <p>Our expert visa support ensures fast, hassle-free documentation and guidance, helping travellers navigate complex processes and enjoy smooth, stress-free international travel with confidence and ease.</p>
                                            {/* <NavLink to="/*" className="btn hover">Read More</NavLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://bracketweb.com/treck-html/main-html/assets/images/coaching/coaching-1-4.jpg" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h4>Guided Local Experiences</h4>
                                            <p>Explore destinations with knowledgeable local guides, uncover hidden gems, immerse in authentic culture, and enjoy curated experiences that make every trip insightful, exciting, and unforgettable.</p>
                                            {/* <NavLink to="/*" className="btn hover">Read More</NavLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home5">
                <div className="container">
                    <h5 data-aos="fade-up">Reasons to Choose GoWorldTrips</h5>
                    <h1 data-aos="fade-up">Experience Unmatched Travel Benefits With Us</h1>
                    <div className="row">
                        {BenefitsData.map((data) => (
                            <div className="col-6 col-md-4 col-lg-2 my-2 d-flex align-items-stretch" key={data.id} data-aos="fade-up">
                                <div className="box">
                                    <img src={data.img} />
                                    <h5>{data.h4}</h5>
                                    <p>{data.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="home10">
                <div className="container">
                    <h5>News And Updates</h5>
                    <h1>Latest Travel News and Articles</h1>
                    <p>Stay informed with the latest travel tips, insights, and stories to inspire your next unforgettable journey.</p>
                    <div className="row">
                        {BlogData.slice(0, 3).map((Bdata) => (
                            <div className="col-md-4 col-lg-4 my-2 d-flex align-items-stretch" key={Bdata.id} data-aos="fade-up">
                                <div class="card"  >
                                    <img src={Bdata.img} className='img-fluid img-thumbnail' />
                                    <div class="card-body">
                                        <div className="date d-flex justify-content-between top">
                                            <p><FaUser /> {Bdata.Admin}</p>
                                            <p><FaCalendarAlt /> {Bdata.Date}</p>
                                        </div>
                                        <h4>{Bdata.h3}</h4>
                                        <p>{Bdata.p}</p>
                                        <NavLink to="/*" className="btn hover">Read More <HiExternalLink /></NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="home8">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <h5 data-aos="fade-up">Ready to Embark on Your Next Journey?</h5>
                            <h1>Your Trusted Online Travel Booking Platform</h1>
                            <p>Plan your perfect journey with ease using our trusted online platform. Browse curated tours, secure bookings, and seamless travel arrangements, ensuring every adventure is effortless, enjoyable, and unforgettable.</p>
                            <p>Whether exploring iconic cities or hidden gems, our platform delivers exceptional travel experiences. Benefit from expert guidance, personalized packages, and worldwide support to make your trips smooth, exciting, and truly memorable.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://ex-coders.com/html/turmet/assets/img/man-image.png" className='img-fluid' data-aos="fade-up" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="home6">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-10">
                            <h1 data-aos="fade-up">Travel Europe Easily With Our Schengen Visa</h1>
                            <p data-aos="fade-up">Get expert guidance and hassle-free Schengen visa support. Contact us today to start your journey across Europe with ease and confidence.</p>
                        </div>
                        <div className="col-lg-2">
                            <NavLink to="/contact" className='link btn hover' data-aos="fade-up">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home