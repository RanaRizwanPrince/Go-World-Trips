import React from 'react'
import { NavLink } from 'react-router-dom';
import BenefitsData from "../Data/BenefitsData";
import { PopularD } from "../Data/BenefitsData";
import { TourPackages } from "../Data/BenefitsData";
import { MdGppGood } from "react-icons/md";
const Home = () => {
    return (
        <>
            <section className="home1">
                <div className="container">
                    <div className="content">
                        <h5>Smooth And Reliable Travel Solutions</h5>
                        <h1>Your Trusted Travel Agent</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat repudiandae sapiente reprehenderit accusantium cumque ab quam vitae odit ipsum, expedita doloribus quo maxime facilis asperiores.</p>
                        <NavLink className="btn hover" to="">Free Consultancy</NavLink>
                    </div>
                </div>
            </section>
            <section className="home2">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7 col-md-6 my-2">
                            <h1 data-aos="fade-up">Plan Your Trip with Trevily</h1>
                            <p data-aos="fade-up">At Advantage Shuttles, we offer a wide range of exciting tours, highlighted by special sales. Our user-friendly design ensures a seamless booking experience for every traveler.</p>
                            <p data-aos="fade-up">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                            <p data-aos="fade-up"><MdGppGood /> Invest in your simply neighborhood</p>
                            <p data-aos="fade-up"><MdGppGood /> Support people in free text extreme need</p>
                            <p data-aos="fade-up"><MdGppGood /> Largest global industrial business community</p>
                            <a data-aos="fade-up" className='btn hover' href="">Read More</a>
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
                        <h1 data-aos="fade-up">Top Tour Packages</h1>
                        <p data-aos="fade-up"> placeat blanditiis excepturi maxime laudantium consequuntur ab aut dolore molestias! Assumenda accusamus aspernatur tenetur, possimus est rem deserunt corrupti voluptatibus odit accusantium incidunt deleniti distinctio doloremque molestias, reiciendis quas! Necessitatibus quas suscipit ex provident!</p>
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
            <div className="container">
                <div className="hover">
                    <img data-aos="fade-up" src="https://www.travelhouseuk.co.uk/assets/theme-v4/img/book-now-pay-later-flights.jpg" className="img-fluid " />
                </div>
            </div>
            <section className="home9">
                <div className="container">
                    <h5 data-aos="fade-up" data-aos-duration="4000">Top Destinations</h5>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="left">
                            <h1 data-aos="fade-up">Explore Popular Destinations</h1>
                            <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                        <div className="right">
                            <NavLink to="" className='btn hover' data-aos="fade-up">Read More</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        {PopularD.map((item) => (
                            <div className="col-lg-3 col-md-3 my-3" key={item.id} data-aos="fade-up">
                                <div className="card destination-card">
                                    <img src={item.img} className="img-fluid" />
                                    <div className="content">
                                        <p>{item.p}</p>
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
                    <h5 data-aos="fade-up">Explore Our Great Services</h5>
                    <h1 data-aos="fade-up">Reliable Schengen Visa Assistance And Travel Solutions</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/10/Visa-schengen-3.webp" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5>Schengen Visa Assistance</h5><br />
                                            <p>Secure your Schengen visa with ease through our reliable guidance and smooth application process.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/merry-christmas-5219496-scaled.jpg" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5>Flights & Hotels Reservation</h5><br />
                                            <p>Book your flights and hotels quickly with our trusted support for a smooth travel experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/10/Visa-schengen-3.webp" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5>Schengen Visa Assistance</h5><br />
                                            <p>Secure your Schengen visa with ease through our reliable guidance and smooth application process.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 my-2" data-aos="fade-up">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/merry-christmas-5219496-scaled.jpg" className="img-fluid img-thumbnail rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5>Flights & Hotels Reservation</h5><br />
                                            <p>Book your flights and hotels quickly with our trusted support for a smooth travel experience.</p>
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
                    <h5 data-aos="fade-up">Why Choose Us?</h5>
                    <h1 data-aos="fade-up">Your Benefits With Us</h1>
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
                <img src="https://wowtheme7.com/tf/travelor/travelor/assets/images/testimonial/testimonial-bg-shape.png" className="img-fluid" />
            </section>
            <section className="home8">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <h5 data-aos="fade-up">Are you ready to travel?</h5>
                            <h1 data-aos="fade-up">World Leading Online Tour Booking Platform</h1>
                            <p data-aos="fade-up">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p data-aos="fade-up">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <img src="https://ex-coders.com/html/turmet/assets/img/icon/08.svg" className='icon' data-aos="fade-up" /><b data-aos="fade-up">Most Adventure Tour Ever</b><br />
                            <img src="https://ex-coders.com/html/turmet/assets/img/icon/09.svg" className='icon' data-aos="fade-up" /><b data-aos="fade-up">Real Tour Starts from Here</b>
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
                            <h1 data-aos="fade-up">Schengen Visa Covering 27+ European Countries</h1>
                            <p data-aos="fade-up">Explore European countries with one visa your gateway to unforgettable journeys.</p>
                        </div>
                        <div className="col-lg-2">
                            <NavLink to="" className='btn hover' data-aos="fade-up">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home7">
                <div className="container">
                    <h6 data-aos="fade-up">Our Blogs Offers</h6>
                    <h1 data-aos="fade-up">Recent Articles And Posts</h1>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 my-2" data-aos="fade-up">
                            <div className="card"  >
                                <img src="https://htmldesigntemplates.com/html/travelin/images/trending/trending10.jpg" className="img-fluid" />
                                <div className="card-body">
                                    <h2>Technology</h2>
                                    <p>How a developer duo at Deutsche Bank keep remote alive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-2" data-aos="fade-up">
                            <div className="card"  >
                                <img src="https://htmldesigntemplates.com/html/travelin/images/trending/trending12.jpg" className="img-fluid" />
                                <div className="card-body">
                                    <h2>Technology</h2>
                                    <p>How a developer duo at Deutsche Bank keep remote alive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-2" data-aos="fade-up">
                            <div className="card"  >
                                <img src="https://htmldesigntemplates.com/html/travelin/images/trending/trending13.jpg" className="img-fluid" />
                                <div className="card-body">
                                    <h2>Technology</h2>
                                    <p>How a developer duo at Deutsche Bank keep remote alive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home