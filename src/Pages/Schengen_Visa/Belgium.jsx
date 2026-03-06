import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Belgium = () => {
    return (
        <>
            <section className="Belgium1">
                <div className="container">
                    <div className="content">
                        <h1>Belgium Tourist Visa</h1>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="France2">
                <div className="container">
                    <div className="content">
                        <h1>Schengen Tourist Visa</h1>
                        <p>Dreaming of warm waffles in Brussels or a fairytale stroll through medieval Bruges? Getting your Belgium Schengen Tourist Visa shouldn’t feel like a marathon. Whether it’s the vibrant city life of Antwerp or the charming canals and cobbled streets across the country, we’ve decoded the paperwork for you. From flawless documentation to expert guidance, we ensure your application stands out from the crowd. Let’s turn those ‘one day’ travel plans into today’s boarding pass. Ready to say hello to Belgium? 🇧🇪</p>
                    </div>
                </div>
            </section>
            <section className="collapsbox">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#1" aria-expanded="true" aria-controls="1">
                                            Requirements
                                        </button>
                                    </h2>
                                    <div id="1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <h4>Visa Application Form</h4>
                                            <p>Completed and printed from the Visa On Web (VOW) portal, signed by the applicant (or guardian if a minor).</p>
                                            <h4>Passport</h4>
                                            <p>Valid for at least 3 months beyond your intended departure from the Schengen Area, issued within the last 10 years, and containing at least two blank pages.</p>
                                            <h4>Photos</h4>
                                            <p>Two recent (max. 6 months old), 35x45mm, color photographs against a light background, meeting Schengen/ICAO standards.</p>
                                            <h4>Proof of Travel</h4>
                                            <p>Confirmed round-trip flight reservation and a detailed tourist itinerary/program for your stay in Belgium/Schengen Area.</p>
                                            <h4>Proof of Accommodation</h4>
                                            <p>Confirmed hotel reservations for the entire duration of your stay in the Schengen Area, clearly showing your name and the hotel’s details.</p>
                                            <h4>Travel Medical Insurance</h4>
                                            <p>Mandatory for the entire duration of stay, valid across all Schengen countries, with a minimum coverage of €30,000 for emergency medical and repatriation expenses.</p>
                                            <h4>Proof of Funds</h4>
                                            <p>Personal bank statements (typically the last 6 months) and salary slips (e.g., last 3-12 months). Must show sufficient funds to cover the stay. The required daily minimum for Belgium varies, so applicants should demonstrate more than enough funds.</p>
                                            <h4>Civil Documents</h4>
                                            <p>Depending on your country of residence, you may need family registration records, national ID, property documents, and their English/French/Dutch translations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2" aria-expanded="false" aria-controls="2">
                                            Locations
                                        </button>
                                    </h2>
                                    <div id="2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p>Brussels</p>
                                                    <p>Grand Place</p>
                                                    <p>Atomium</p>
                                                    <p> Manneken Pis</p>
                                                    <p>Royal Palace of Brussels</p>
                                                    <p>Bruges (Brugge)</p>
                                                    <p>Belfry of Bruges</p>
                                                    <p>Belfry of Bruges</p>
                                                    <p>Minnewater (Lake of Love)</p>
                                                    <p>Ghent (Gent)</p>
                                                    <p>Gravensteen Castle</p>
                                                    <p>Saint Bavo’s Cathedral</p>
                                                    <p>Antwerp (Antwerpen)</p>
                                                    <p>Antwerp Central Station</p>
                                                    <p>Cathedral of Our Lady</p>
                                                    <p>Dinant</p>
                                                </div>
                                                <div className="col-6">
                                                    <p>Citadel of Dinant</p>
                                                    <p>Leuven</p>
                                                    <p>Historic Leuven Town Hall</p>
                                                    <p>Ardennes (Region)</p>
                                                    <p>Bouillon Castle (Château de Bouillon)</p>
                                                    <p>Durbuy</p>
                                                    <p>Ypres (Ieper)</p>
                                                    <p>Menin Gate Memorial</p>
                                                    <p>Waterloo</p>
                                                    <p>Lion’s Mound</p>
                                                    <p>Mechelen</p>
                                                    <p>Spa</p>
                                                    <p>De Haan</p>
                                                    <p>Blankenberge</p>
                                                    <p>Ostend</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <TravelTips />
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='text-center mt-4'>Fill out Belgium Tourist Visa Application Form Online</h1>
            <ContactForm />
        </>
    )
}
export default Belgium