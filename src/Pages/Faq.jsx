import React from 'react'
import { RiShieldStarFill } from "react-icons/ri";
const Faq = () => {
    return (
        <>
            <section className="About1">
                <div className="container">
                    <div className="content">
                        <h1>Frequently Asked Questions (FAQ)</h1>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="faq1">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-5">
                            <img src="https://ex-coders.com/html/visaway/assets/img/home-2/feature/02.png" className="img-fluid" />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <h6>Your Travel Made Easy</h6>
                            <h1>Smooth Visa Journey Guaranteed</h1>
                            <p>We provide expert guidance for every visa application, ensuring smooth processing, personalized support, and reliable assistance</p>
                            <div className="box">
                                <h3><RiShieldStarFill /> Expert Consultants</h3>
                                <p>Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.</p>
                            </div>
                            <div className="box">
                                <h3><RiShieldStarFill /> Personalized Support</h3>
                                <p>Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.</p>
                            </div>
                            <div className="box">
                                <h3><RiShieldStarFill /> Transparent Process</h3>
                                <p>Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq2">
            <div className="container">
                <img src="https://www.admissions.uga.edu/wp-content/uploads/2019/09/faq-banner.jpeg" className="w-100 img-thumbnail" /><br /><br />
            </div>
                <div className="container">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#1" aria-expanded="true" aria-controls="1">
                                    Booking and Planning
                                </button>
                            </h2>
                            <div id="1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <b>1. How do I start planning my trip with Go World Trips?</b>
                                    <p>Simply reach out to us via phone or WhatsApp at <b>+44 7311 132376</b>. We’ll discuss your preferences and create a bespoke itinerary tailored to your needs.</p>
                                    <b>2. Can I make changes to my booking after confirmation? </b>
                                    <p>Yes, we understand that plans can change. Please contact our team as soon as possible, and we will do our best to accommodate your requests, subject to availability and partner policies.</p>
                                    <b>3.	Do you offer group travel packages? </b>
                                    <p>Absolutely. We specialise in both individual holidays and organised group tours across Europe and the Schengen Area.</p>
                                </div>
                            </div>
                        </div><br />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Schengen Area and Visas
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <b>1. Which countries are part of the Schengen Zone? </b>
                                    <p>The Schengen Area currently includes 29 European countries, allowing for seamless travel across most of the continent with a single visa.</p>
                                    <b>2.	How early should I apply for my Schengen visa?</b>
                                    <p>We recommend starting the process at least 3 to 6 months before your intended travel date to account for processing times at the embassies.</p>
                                    <b>3.	Is travel insurance mandatory for Europe? </b>
                                    <p>Yes, for Schengen visa applications and general safety, comprehensive travel insurance is a mandatory requirement that covers medical emergencies and repatriation.</p>
                                </div>
                            </div>
                        </div><br />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Destinations and Experience
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <b>1.	What are the most popular destinations you cover?</b>
                                    <p>Our clients particularly enjoy our curated tours of Italy, Spain, Belgium, and France, but we provide services for all major European destinations.</p>
                                    <b>2.	Do you provide local guides in Europe? </b>
                                    <p>Yes, we can arrange professional, English-speaking local guides to ensure you get an authentic and enriching experience at every stop.</p>
                                    <b>3.	Are your holiday packages family-friendly? </b>
                                    <p>Yes, we design itineraries that cater to all ages, ensuring comfortable transport and child-friendly activities throughout your journey.</p>
                                </div>
                            </div>
                        </div><br />
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#04" aria-expanded="false" aria-controls="04">
                                    Payments and Support
                                </button>
                            </h2>
                            <div id="04" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <b>1.	What payment methods do you accept? </b>
                                    <p>We accept all major credit and debit cards, as well as secure bank transfers for your peace of mind.</p>
                                    <b>2.	What happens if I encounter an issue during my trip? </b>
                                    <p>Our support team is available via our dedicated line at +44 7311 132376 to assist you with any urgent enquiries while you are abroad.</p>
                                    <b>3.	Are there any hidden costs in your quotes? </b>
                                    <p>Transparency is our priority. Our quotes clearly outline what is included (e.g., flights, accommodation, tours) so there are no surprises during your travels.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq